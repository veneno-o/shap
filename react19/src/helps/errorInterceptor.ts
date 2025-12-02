// errorInterceptor.ts
import { ErrorLevel } from '../interface/errors'

/**
 * 错误分类策略
 */
export function classifyError(error: any): ErrorLevel {
  // 网络错误
  if (!error.response) return ErrorLevel.CRITICAL


  const status = error.response.status
  if (status == 666) return ErrorLevel.CRITICAL

  // 认证错误
  if ([401, 403].includes(status)) {
    return ErrorLevel.CRITICAL
  }

  // 服务器错误
  if (status >= 500) {
    return ErrorLevel.CRITICAL
  }

  // 限流错误
  if (status === 429) {
    return ErrorLevel.SILENT
  }

  // 其他业务错误
  return ErrorLevel.BATCH
}