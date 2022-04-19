import { QuestSchema } from "../models/questModel.js";
import mongoose from "mongoose";

const Quest = mongoose.model('Quest', QuestSchema);

export const addQuest = (req, res) =>{
    let newQuest = new Quest(req.body);
    Quest.find({questName:req.body.questName}, (err, quest)=>{
        if(err){
            res.send({status:'false',message:"error", error:err});
        }
        if(quest.length == 0)
        {
            newQuest.save((err, quest) => {
                if(err){
                    res.status(400).send({status:'false',message:"error", error:err});
                } else {
                    res.status(200).send({status:'true',message:"data added successfully", data:quest});
                }
            })
        }
        else{
            Quest.findOneAndUpdate({ questName: req.body.questName }, { roomName: req.body.roomName },
                function (err, quest) {
                    if (err) {
                        res.status(400).send({ status: 'false', message: "error", error: err });
                    }
                    else {
                        res.status(200).json({ status: 'true', message: "success"});
                    }
                });
        }
        //res.status(200).json({status:'true',message:"success", data:quest});
    })
    // newQuest.save((err, quest) => {
    //     if(err){
    //         res.status(400).send({status:'false',message:"error", error:err});
    //     } else {
    //         res.status(200).send({status:'true',message:"data added successfully", data:quest});
    //     }
    // })
}

export const getAllQuest = (req, res) =>{
    Quest.find({}, (err, quest)=>{
        if(err){
            res.send({status:'false',message:"error", error:err});
        }
        res.status(200).json({status:'true',message:"success", data:quest});
    })
}