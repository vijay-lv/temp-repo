const EventEmitter=require('events')

const customEmitter=new EventEmitter()

customEmitter.on('response',(name,age)=>{

    console.log(`response received ${name} and ${age}`)
})

customEmitter.emit('response','et',34)