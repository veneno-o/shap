export default [
  {
    url: '/data/1', // 接口路径
    method: 'get', // 请求方法
    response: () => { // 响应函数
      return {
        code: 666, // 自定义状态码
        message: 'error01', // 状态信息
        data: {}, // 返回数据
      }
    }
  },{
    url: '/data/1', // 接口路径
    method: 'get', // 请求方法
    response: () => { // 响应函数
      return {
        code: 666, // 自定义状态码
        message: 'error01', // 状态信息
        data: {}, // 返回数据
      }
    }
  },{
    url: '/data/1', // 接口路径
    method: 'get', // 请求方法
    response: () => { // 响应函数
      return {
        code: 666, // 自定义状态码
        message: 'error01', // 状态信息
        data: {}, // 返回数据
      }
    }
  },
  // {
  //   url: '/data/2', // 接口路径
  //   method: 'get', // 请求方法
  //   response: () => { // 响应函数
  //     return {
  //       code: 401, // 自定义状态码
  //       message: 'error02', // 状态信息
  //       data: {}, // 返回数据
  //     }
  //   }
  // },
  // {
  //   url: '/data/3', // 接口路径
  //   method: 'get', // 请求方法
  //   response: () => { // 响应函数
  //     return {
  //       code: 401, // 自定义状态码
  //       message: 'error03', // 状态信息
  //       data: {}, // 返回数据
  //     }
  //   }
  // },{
  //   url: '/data/4', // 接口路径
  //   method: 'get', // 请求方法
  //   response: () => { // 响应函数
  //     return {
  //       code: 401, // 自定义状态码
  //       message: 'error04', // 状态信息
  //       data: {}, // 返回数据
  //     }
  //   }
  // },{
  //   url: '/data/5', // 接口路径
  //   method: 'get', // 请求方法
  //   response: () => { // 响应函数
  //     return {
  //       code: 401, // 自定义状态码
  //       message: 'error05', // 状态信息
  //       data: {}, // 返回数据
  //     }
  //   }
  // }
]