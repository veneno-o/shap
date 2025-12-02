const tasks: (() => Promise<number>)[] = new Array(88).fill(0).map((_, i) => () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(i)
    }, Math.random() * 1000)
  })
})

export { tasks }
