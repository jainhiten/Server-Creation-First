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
                let newToDo = toDoList;
                newToDo.push(body.item);
                response.writeHead(201);
            });

        }
        else if (method === "DELETE") {
            let body = "";
            request.on('error', () => {
                console.error(err)

            })
            .on('data', (chunk) =>{
                body += chunk;
            }).on('end', () => {
                body = JSON.parse(body);
                let deleteThis = body.item;

                for(let i = 0; i < toDolist.length; i++){
                    if(toDolist[i] === deleteThis)
                      toDolist.splice(i, 1);
                      break;
                }
            request.writeHead(201);
            });
        } 
        else{
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