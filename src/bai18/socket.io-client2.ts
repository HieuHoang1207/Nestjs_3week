import { io } from 'socket.io-client';

// Kết nối tới server WebSocket tại http://localhost:3000
const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to server:', socket.id);
});

socket.on('message', (data) => {
  console.log('Received message:', data);
});

socket.on('notification', (data) => {
  console.log('Received notification:', data);
});

// Gửi một tin nhắn tới server
socket.emit('message', { text: 'Hello, server, client1!' });
