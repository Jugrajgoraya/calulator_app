const http = require('http');
const url = require('url');
const html = require('./skelton')
const qs = require('query-string');

const server = http.createServer((req, res) =>{
    const{pathname, query} = url.parse(req.url,true)
    let body ='';
    req.on('data', (chunk) =>{
        body += chunk;
    })
    req.on('end', () =>{
        req.body = qs.parse(body);
        console.log(req.body);
        let resource = `${req.method} ${pathname}`
    
            console.log(pathname);

            let final =0;
            let a = parseInt(req.body.firstNumber);
            let b = parseInt(req.body.secondNumber);
            let what = req.body.select;
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
            }

            res.writeHead(200, {'content-type': 'text/html'});
            res.write(`${html}`)
            res.write(`<main><h4>Value = ${final} <h4><main>`)
            let url = req.body.URL;
            if(resource === 'POST /view_image'){
                res.write(`<main><img src="${url}"></main>`)
            }
            
            
            return res.end();
            
        })
    })
    

const PORT = 4400

const DOMAIN = 'localhost'
server.listen(PORT, DOMAIN, ()=>{
    console.log('LISTENING');
})