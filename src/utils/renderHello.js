const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz '

const flipLetter = (node, letter) => {
  let step = 0
  const timer = setInterval(() => {
    node.textContent = alphabet[step]
    if (alphabet[step] === letter) {
      clearInterval(timer)
    } else {
      step += 1
    }
    return step
  }, 30)
}

const render = (hello, string) => {
  let timer
  return string.split('').map((letter, i, arr) => {
    timer = setTimeout(() => {
      const objToAppend = document.createElement('span')
      objToAppend.textContent = letter
      hello.append(objToAppend)
      return flipLetter(objToAppend, letter)
    }, i * 60)
    return i === arr.length && clearTimeout(timer)
  })
}
export default render
