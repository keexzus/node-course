const http = require('http');

const server = http.createServer((req, res) => {
    
    if(req.url === '/'){
        res.end('welcome to my homepage')
    }
    if(req.url === '/about'){
        res.end('Here is your history')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>we can't find page you are looking for</p>`)
// res.write('Welcome to My Homepage')
// res.end()
})

server.listen(3000)