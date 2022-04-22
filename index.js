import app from "./app.js";
import mongoose from "mongoose";
import { Server } from "socket.io";
import { createServer } from "http";

const port = process.env.PORT || 3000;

const httpServer = createServer(app);
export const io = new Server(httpServer, { 
    cors: {
        origin: "*",
    } 
});

io.on('connection', (socket) => {
    console.log("connection establish");
    socket.emit("success_connection", "connected");
    socket.on('gameInit', (arg) => {
        console.log("game started")
        socket.broadcast.emit('startGame', arg)
    })
});

httpServer
    .listen(port, () => console.log(`Run on the port ${port}`))
    .on('error', (err) => {
        console.log(err);
    });

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://LTdb:cr8prZoLc37GvhmZ@ltcluster.i61bg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})