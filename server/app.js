"strict"

const express = require("express");
const app = express();
const http = require('http');
const cors =require("cors")
const server = http.createServer(app);
const {Server } = require("socket.io")
app.use(cors())

const io = new Server(server
    , {
    cors: {
        origin: "http://localhost:3000",
        methods:  ["GET", "POST"],
    }
}
)
io.on("connection", (socket)=>{
    //  console.log("User Connected", socket.id);
     
     socket.on("join_room", (data)=>{
        // console.log(`User with id ${socket.id} joined room ${data}`)
        socket.join(data)
     })
     socket.on("send_message", (data)=>{
        console.log(data);
            socket.to(data.room).emit("received_message",data)
     })
     socket.on("disconnect", ()=>{
        console.log('User disconnected', socket.id);
     })
})

server.listen(3001, ()=>{
    console.log('server running http://localhost:3001');
})