// 13-event-emitter.js

const Event = require('events');
const customEmitter = new Event();

customEmitter.on('response', (name, id) => {
    // console.log(`data received `)
    console.log(`data received by user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
    console.log(`some other logic here `)
})

// customEmitter.emit('response')
// customEmitter.emit('response', 'Tetyana', 34)
customEmitter.emit('response', 'john', 34)
