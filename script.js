// public/script.js
const socket = io();
const msgInput = document.getElementById('msgInput');
const sendBtn = document.getElementById('sendBtn');
const messages = document.getElementById('messages');

sendBtn.addEventListener('click', sendMessage);
msgInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const message = msgInput.value.trim();
  if (message !== '') {
    appendMessage(message, 'you');
    socket.emit('message', message);
    msgInput.value = '';
  }
}

socket.on('message', data => {
  appendMessage(data, 'other');
});

function appendMessage(message, type) {
  const div = document.createElement('div');
  div.classList.add('message', type);
  div.textContent = message;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}
