
// Creating Web server using http module

const http = require ('http');    

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.write("Welcome to our home page");
        
    } 
    if(req.url == '/about'){
        res.write("Here is our short history");
        
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        
        `);

    res.write("Welcome to our home page");
    res.end();

    

});

server.listen(3357);



   
