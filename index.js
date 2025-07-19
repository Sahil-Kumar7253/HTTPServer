const http = require("http")
const express = require("express");

const app = express();

app.get("/", (req ,res) => {
    return res.end("Home Page")
})

app.get("/about", (req,res)=>{
    return res.end("My Name")
})

app.listen(8000, () => {
    console.log("Server Started");
})


// Manually Handling Each Request

//create an http server
//const myServer = http.createServer(app);

//req stand for request
//res stand for response

// myServer.listen(8000, () => {
//     console.log("Server Started");
// });

//const fs = require("fs");
//const url = require("url");

// function myHandler(req,res){
//     if(req.url === "/favicon.ico") return res.end();
//     const log = `${Date.now()} : ${req.url} New Req Recieved\n`;
//     const myUrl = url.parse(req.url,true);
//     fs.appendFile("log.txt", log,(err ,data) => {
//         switch(myUrl.pathname){
//             case "/":
//                 res.end("Hello From Server");
//                 break;
//             case "/about":
//                 res.end("I Am Sahil Kumar");
//                 break;
//             default:
//                 res.end("404 Not Found");
//         }
//     });
// }
 