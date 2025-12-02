// 并发控制
async function limitConcurrency(tasks, limit) {
  const promiseArr = []
  return new Promise(async (resolve) => {
    while (tasks.length) {
      const count = Math.min(tasks.length, limit)
      for (let i = 0; i < count; i++) {
        const task = tasks.shift()
        promiseArr.push(task())
      }
      const result = await Promise.all(promiseArr)
      if (tasks.length === 0) return resolve(result)
    }
  })
}

const tasks = new Array(88).fill(0).map((_, i) => () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(i)
    }, Math.random() * 1000)
  })
})

console.log(await limitConcurrency(tasks, 10))
