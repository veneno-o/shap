// errorManager.ts

import toast from "react-hot-toast";
import { ErrorLevel } from "../interface/errors";



/**
 * 增强型错误处理器
 * 支持错误分级和智能合并
 */
class ErrorHandler {
  private batchQueue: string[] = [];
  private batchTimer?: number;
  private criticalErrors: string[] = [];

  /**
   * 处理错误
   * @param error 错误对象
   * @param level 错误级别
   */
  handle(error: any, level = ErrorLevel.BATCH): void {
    const msg = this.extractMessage(error);
    switch (level) {
      case ErrorLevel.CRITICAL:
        this.handleCritical(msg);
        break;
      case ErrorLevel.BATCH:
        this.addToBatch(msg);
        break;
      // SILENT级别不处理
    }
  }

  private extractMessage(error: any): string {
    if (typeof error === 'string') return error;
    return error.response?.data?.message || error.message || '请求失败';
  }

  private handleCritical(msg: string): void {
    // 关键错误立即显示
    toast.error(`[重要] ${msg}`,{ duration: 5000 });
    this.criticalErrors.push(msg);

    // 超过3个关键错误触发全局遮罩
    if (this.criticalErrors.length >= 3) {
      this.showGlobalOverlay();
    }
  }

  private addToBatch(msg: string): void {
    if (!this.batchQueue.includes(msg)) {
      this.batchQueue.push(msg);
    }

    // 防抖处理
    clearTimeout(this.batchTimer);
    this.batchTimer = window.setTimeout(() => {
      this.flushBatch();
    }, 800);// 800ms合并窗口
  }

  private flushBatch(): void {
    if (this.batchQueue.length === 0) return;

    const displayMsg = this.batchQueue.length > 3
      ? `多个操作失败（共${this.batchQueue.length}个）`
      : this.batchQueue.join('；');

    toast.error(displayMsg);
    this.batchQueue = [];
  }

  private showGlobalOverlay(): void {
    toast.removeAll()
    window.dispatchEvent(
      new CustomEvent('globalErrors', {
        detail: {
          messages: this.criticalErrors,
          count: this.criticalErrors.length
        }
      })
    );
  }
}

export const errorHandler = new ErrorHandler();
