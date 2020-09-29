console.log('hello world')

const root = document.getElementById('app')

const render = () => {
  root.innerHTML = `
  <h1>Hello World?</h1>
  `
}

render()