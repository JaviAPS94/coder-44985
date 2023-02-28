const socket = io();

// Swal.fire({
//     title: 'Titulo de prueba',
//     text: 'Texto de prueba',
//     icon: 'success'
// });

let user;

const chatbox = document.getElementById('chatBox');

Swal.fire({
    title: 'Identificate',
    input: 'text',
    text: 'Ingresa el usuario para identificarte en el chat',
    inputValidator: (value) => {
        return !value && "Necesitas escribir un nombre de usuario";
    },
    allowOutsideClick: false
}).then(result => {
    user = result.value;
    socket.emit('authenticated', user);
});

chatbox.addEventListener('keyup', evt => {
    if(evt.key === 'Enter') {
        if(chatbox.value.trim().length>0) {
            socket.emit('message', {
                user,
                message: chatbox.value
            });
        }
    }
});

socket.on('messageLogs', data => {
    if(!user) return;
    let log = document.getElementById('messageLogs');
    let messages = '';
    data.forEach(message => {
        messages += `${message.user} dice: ${message.message}<br/>`
    });
    log.innerHTML = messages;
});

socket.on('newUserConnected', data => {
    if(!user) return;
    Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 6000,
        title: `${data} se ha unido al chat`,
        icon: 'success'
    })
});