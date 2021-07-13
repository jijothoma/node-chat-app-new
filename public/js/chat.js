const socket = io()

socket.on('message', (message, secondmessage) => {
    console.log(message, secondmessage)
})

document.querySelector('#message-form').addEventListener('submit',(e) => {
    e.preventDefault()

    const message = document.querySelector('#Message').value
    const secondmessage = document.querySelector('#SecondMessage').value

    socket.emit('sendMessage', message, secondmessage)
})