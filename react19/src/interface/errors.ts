/**
 * 错误级别定义
 * - CRITICAL: 需要立即处理的关键错误
 * - BATCH: 可批量处理的普通错误
 * - SILENT: 静默处理的次要错误
 */
export enum ErrorLevel {
  CRITICAL = 1,
  BATCH = 2,
  SILENT = 3
}