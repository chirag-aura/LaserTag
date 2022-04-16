import { PlayerSchema } from "../models/playerModel.js";
import mongoose from "mongoose";

const Player = mongoose.model('Player', PlayerSchema);

export const playerClose = async (req, res) => {
    console.log('Player Close');
    console.log(req.body);
    res.status(200).send({ "ResultCode" : 0, "Message" : "OK" })
}

export const playerCreate = async (req, res) => {
    console.log('Player created');
    console.log(req.body);
    res.status(200).send({ "ResultCode" : 0, "Message" : "OK" })
}

export const playerEvent = async (req, res) => {
    console.log('Player Event');
    console.log(req.body);
    res.status(200).send({ "ResultCode" : 0, "Message" : "OK" })
}

export const playerJoin = async (req, res) => {
    console.log('Player Join');
    console.log(req.body);
    res.status(200).send({ "ResultCode" : 0, "Message" : "OK" })
}

export const playerLeave = async (req, res) => {
    console.log('Player Leave');
    console.log(req.body);
    res.status(200).send({ "ResultCode" : 0, "Message" : "OK" })
}

export const playerProperties = async (req, res) => {
    console.log('Player Properties');
    console.log(req.body);
    res.status(200).send({ "ResultCode" : 0, "Message" : "OK" })
}

export const addPlayerInfo = async (req, res) => {
    let newPlayer = new Player(req.body);
    console.log(newPlayer)
    newPlayer.save((err, player) => {
        if(err){
            res.status(400).send({status:'false',message:"error", error:err});
        } else {
            res.status(200).send({status:'true',message:"data added successfully", data:player});
        }
    })
}

export const getPlayerInfo = async (req, res) => {
    Player.find({}, (err, player)=>{
        if(err){
            res.send({status:'false',message:"error", error:err});
        }
        res.status(200).json({status:'true',message:"success", data:player});
    })
}
