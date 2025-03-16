import {WebSocketServer} from "ws";
import WebSocket from "ws";
import {client} from "@repo/prisma/client"; 






const server = new WebSocketServer({ port: 8082 });
server.on("connection",async(socket:WebSocket)=>{
    await client.user.create({
        data:{
            username:Math.random().toString() , 
            password:Math.random().toString()
        }
    })
    socket.send("hi there you are connected to the server");
})
