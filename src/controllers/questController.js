import { QuestSchema } from "../models/questModel";
import mongoose from "mongoose";

const Quest = mongoose.model('Quest', QuestSchema);

export const addQuest = (req, res) =>{
    let newQuest = new Quest(req.body);
    console.log(newQuest)
    newQuest.save((err, quest) => {
        if(err){
            res.status(400).send(err);
        } else {
            res.status(200).send(quest);
        }
    })
}

export const getAllQuest = (req, res) =>{
    Quest.find({}, (err, quest)=>{
        if(err){
            res.send(err);
        }
        res.status(200).json(quest);
    })
}