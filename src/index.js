import RB from './lib/reactive-bicycle'


const app = document.querySelector('#app')

console.log(app)

const block1 = new RB.Block('red', 'its a red block')
const block2 = new RB.Block('blue', 'its a blue block')

console.log(block1)

app.appendChild(block1.node)
app.appendChild(block2.node)

block1.print()