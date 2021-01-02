// >>>>>>>> EXAMPLE USING THE HTTP MODULE, WHICH IS A NODEJS CORE MODULE <<<<<<<<
// const http = require('http');
// const { listenerCount } = require('process');

// const todos = [
//   { id: 1, text: 'Todo One'},
//   { id: 2, text: 'Todo Two'},
//   { id: 3, text: 'Todo Three'},
// ]

// const server = http.createServer((req,res) => {
 
//   res.writeHead(201, {
//     'Content-Type' : 'application/json',
//     'X-Powered-By': 'Node.js'
//   })

//   res.end(JSON.stringify({
//     success: true, 
//     data: todos
//   }));
// });

// const PORT = 5000;

// server.listen(PORT, () => console.log(`Server running on port ${PORT}`));