'use strict';
const socket = new WebSocket('ws://host/');

socket.onopen = function() {
  socket.send(JSON.stringify({
    type: 'init',
    url: document.location.href,
    ref: document.referrer
  }));
};