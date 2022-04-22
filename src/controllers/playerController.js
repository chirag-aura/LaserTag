import { PlayerSchema } from "../models/playerModel.js";
import { RoomSchema } from "../models/roomModel.js";
import mongoose from "mongoose";

const Player = mongoose.model('Player', PlayerSchema);
const Room = mongoose.model('Room', RoomSchema)

export const roomClose = async (req, res) => {
    console.log('Room Close');
    console.log(req.body);
    Room.remove(
        { roomId: req.body.GameId },
        {
          justOne: true,
        },
        function (err, Room) {
            if (err) {
                res.status(400).send({ status: 'false', message: "error", error: err });
            }
            else {
                res.status(200).json({ "ResultCode": 0, "Message": "OK" });
            }
        }
     );
}

export const playerCreate = async (req, res) => {
    console.log('Player created');
    console.log(req.body);
    res.status(200).send({ "ResultCode": 0, "Message": "OK" })
}

export const playerEvent = async (req, res) => {
    console.log('Player Event');
    console.log(req.body);
    res.status(200).send({ "ResultCode": 0, "Message": "OK" })
}

export const playerJoin = async (req, res) => {
    let defaltplayer = {
        playerId: req.body.UserId,
        roomId: req.body.GameId,
        score: 0,
        battery: 0,
    }
    let newPlayer = new Player(defaltplayer);
    console.log(newPlayer)
    newPlayer.save((err, player) => {
        if (err) {
            res.status(400).send({ status: 'false', message: "error", error: err });
        } else {
            res.status(200).send({ "ResultCode": 0, message: "data added successfully" });
        }
    })
}

export const playerLeave = async (req, res) => {
    console.log('Player Leave');
    console.log(req.body);
    res.status(200).send({ "ResultCode": 0, "Message": "OK" })
}

export const playerProperties = async (req, res) => {
    console.log('Player Properties');
    console.log(req.body);
    res.status(200).send({ "ResultCode": 0, "Message": "OK" })
}

export const addPlayerInfo = async (req, res) => {
    if (req.body.battery == -1) {
        console.log("score update")
        Room.updateOne(
            { "players.playerId":req.body.playerId},
            { 
                $set: {
                    "players.$.score": req.body.score,
                }
            },
            function (err, Room) {
                if (err) {
                    res.status(400).send({ "ResultCode": 0, "Message": "OK" });
                }
                else {
                    res.status(200).json({ "ResultCode": 0, "Message": "OK" });
                }
            }
        )
    }
    else if(req.body.score == -1){
        console.log("battery update")
        Room.updateOne(
            { "players.playerId":req.body.playerId},
            { 
                $set: {
                    "players.$.battery": req.body.battery
                }
            },
            function (err, Room) {
                if (err) {
                    res.status(400).send({ "ResultCode": 0, "Message": "OK" });
                }
                else {
                    res.status(200).json({ "ResultCode": 0, "Message": "OK" });
                }
            }
        )
    }
    else{
        console.log("both update")
        Room.updateOne(
            { "players.playerId":req.body.playerId},
            { 
                $set: {
                    "players.$.score": req.body.score,
                    "players.$.battery": req.body.battery
                }
            },
            function (err, Room) {
                if (err) {
                    res.status(400).send({ "ResultCode": 0, "Message": "OK" });
                }
                else {
                    res.status(200).json({ "ResultCode": 0, "Message": "OK" });
                }
            }
        )
    }
}

export const getPlayerInfo = async (req, res) => {
    Player.find({}, (err, player) => {
        if (err) {
            res.send({ status: 'false', message: "error", error: err });
        }
        res.status(200).json({ status: 'true', message: "success", data: player });
    })
}
