const http = require ("http"); //package import
const port = 8081; // local port number

const toDolist = ["Complete Node Byte", "Play Cricket"];

http
   .createServer((request , response) => {    // call back function
    const {method, url} = request;

    if (url === "/todos") {
        if(method === "GET") {
            response.writeHead(200);
            response.write(toDolist.toString());
        }else if (method === "POST") {
            let body = "";
            request.on('error',(err) => {
                console.error(err)
            }).on('data',(chunk) => {
                body += chunk;
            }).on('end',() => {
                body += JSON.parse(body);
                console.log("data: ", body);
            });

        }else{
            response.writehead(404);
        }
    }else {
        response.writehead(404);
    }
    response.end();
   })

   .listen(port, () => {    //callback function
    console.log('Node Js Server Started on port ${port}');
   });

   // http://localhost:8081