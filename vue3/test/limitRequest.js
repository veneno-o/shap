function limitRequest(tasks, limit) {
  const queue = []
  let runingCount = 0
  function enqueque(task) {
    return new Promise((resolve, reject) => {
      queue.push({
        task,
        resolve,
        reject,
      })
      run()
    })
  }

  function run() {
    while (queue.length > 0 && runingCount < limit) {
      runingCount++
      const { task, resolve, reject } = queue.shift()
      task()
        .then((value) => {
          console.log(value)
          resolve(value)
        })
        .catch((err) => {
          reject(err)
        })
        .finally(() => {
          runingCount--
          run()
        })
    }
  }

  return Promise.all(tasks.map((task) => enqueque(task)))
}
const tasks = new Array(88).fill(0).map((_, i) => () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(i)
    }, Math.random() * 1000)
  })
})
console.log(await limitRequest(tasks, 10))
