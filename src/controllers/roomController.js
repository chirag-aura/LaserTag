import { RoomSchema } from "../models/roomModel.js";
import mongoose from "mongoose";
const Room = mongoose.model('Room', RoomSchema);

export const addRoom = (req, res) =>{
    console.log(req.body)
    let body = { 
        roomId : req.body.GameId,
        players: [
            {
                playerId: req.body.UserId,
                playerName: req.body.Nickname,
                score:0,
                battery:0,
                team:0,
            }
        ] 
    }
    let newRoom = new Room(body);
    newRoom.save((err, room) => {
        if(err){
            res.status(400).send({status:'false',message:"error", error:err});
        } else {
            res.status(200).send({ "ResultCode": 0, "Message": "OK" });
        }
    })
}

export const addPlayer = (req, res) =>{
    console.log(req.body)
    Room.updateOne(
        { roomId:req.body.GameId},
        { 
            $push: {
                "players": {
                    playerId: req.body.UserId,
                    playerName: req.body.NickName,
                    score:0,
                    battery:0
                }
            }
        },
        function (err, Room) {
            if (err) {
                res.status(400).send({ status: 'false', message: "error", error: err });
            }
            else {
                res.status(200).json({ "ResultCode": 0, "Message": "OK" });
            }
        }
    )
    console.log( req.body.UserId)
    //res.status(200).send({status:'true',message:"data added successfully"});
}

export const getAllRooms = (req, res) =>{
    Room.find({}, (err, player) => {
        if (err) {
            res.send({ status: 'false', message: "error", error: err });
        }
        res.status(200).json({ status: 'true', message: "success", data: player });
    })
}