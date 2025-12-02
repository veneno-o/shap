import { classifyError } from "../helps/errorInterceptor.js";
import axios from "axios";
import { errorHandler } from "../helps/errorManager.js";

export const instace = axios.create({
  // You can set your base URL or other configurations here
  baseURL: "http://localhost:5173",
  timeout: 10000,
});

instace.interceptors.response.use(
  (response) => {
    if (response.data && response.data.code !== 0) {
      classifyErrorHandle(response.data)
      localStorageSave(response.data);
      return Promise.reject(response.data);
    }
    return response;
  },
  (error) => {
    classifyErrorHandle(error)
    return Promise.reject(error);
  }
);

// 可扩展错误上报
axios.interceptors.response.use(null, (error) => {
  localStorageSave(error);
  return Promise.reject(error);
});

// 统一错误处理入口
function classifyErrorHandle(error:any){
  const level = classifyError(error);
  errorHandler.handle(error, level);
}
// 错误持久化
function localStorageSave(error:any):void{
  localStorage.setItem(
    "errorLog",
    JSON.stringify({
      timestamp: Date.now(),
      errors: error,
    })
  );
}