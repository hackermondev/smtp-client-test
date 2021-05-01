const net = require('net');
const client = net.createConnection({ port: 25, host: 'gmail-smtp-in.l.google.com' }, () => {
  // 'connect' listener.
  console.log('connected to server!');

  setInterval(()=>{
    client.write('world!\r\n');
  }, 50)
})

client.on('data', (data) => {
  console.log(data.toString());
  client.end();
})

client.on('end', () => {
  console.log('disconnected from server');
})

client.on('error', (err)=>{
  console.error(err)
})
