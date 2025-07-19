const http = require("http")
const fs = require("fs");
const url = require("url");

//create an http server
const myServer = http.createServer((req,res) => {
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()} : ${req.url} New Req Recieved\n`;
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);
    fs.appendFile("log.txt", log,(err ,data) => {
        switch(myUrl.pathname){
            case "/":
                res.end("Hello From Server");
                break;
            case "/about":
                res.end("I Am Sahil Kumar");
                break;
            default:
                res.end("404 Not Found");
        }
    }); 
});

//req stand for request
//res stand for response

myServer.listen(8000, () => {
    console.log("Server Started");
});

 