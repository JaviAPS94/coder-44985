const http = require('http')

const server = http.createServer((req, res) => {
    res.end('Mi primer hola mundo desde backend update');
})

server.listen(8090, () => {
    console.log(`Listening on port 8090`)
});
