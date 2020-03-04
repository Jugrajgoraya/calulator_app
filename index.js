const http = require('http');
const url = require('url');
const html = require('./skelton')

const server = http.createServer((req, res) =>{
    const{pathname, query} = url.parse(req.url,true)
    console.log(query);
    console.log(pathname);

    let final =0;
    let a = parseInt(query.firstNumber);
    let b = parseInt(query.secondNumber);
    let what = query.select;
    if(what === '+'){
        final = a + b;
    }
    if(what === '-'){
        final = a - b;
    }
    if(what === '*'){
        final = a * b;
    }
    if(what === '/'){
        final = a / b;
    }if(a !== Number || b !== Number){
        final = "provide the valid input"
    }

    res.writeHead(200, {'content-type': 'text/html'});
    res.write(`${html}`)
    res.write(`<main><h4>Value = ${final} <h4><main>`)
    return res.end();
      
})

const PORT = 4400

const DOMAIN = 'localhost'
server.listen(PORT, DOMAIN, ()=>{
    console.log('LISTENING');
})