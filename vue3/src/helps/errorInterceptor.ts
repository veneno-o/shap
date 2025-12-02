// errorInterceptor.ts
import axios from 'axios'
import { errorHandler } from './errorManager'

/**
 * 错误分类策略
 */
function classifyError(error: any): ErrorLevel {
  // 网络错误
  if (!error.response) return ErrorLevel.CRITICAL

  const status = error.response.status

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

// axios响应拦截器
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const level = classifyError(error)
    errorHandler.handle(error, level)
    return Promise.reject(error)
  },
)
