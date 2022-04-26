import mongoose from "mongoose";
import { ShemaSchema } from "../models/schemaModel.js";

const SSchema = mongoose.model('Schema', ShemaSchema);

export const addSchema = (req, res) =>{
    let newSchema = new SSchema(req.body);
    // SSchema.find({questName:req.body.questName}, (err, quest)=>{
    //     if(err){
    //         res.send({status:'false',message:"error", error:err});
    //     }
    //     if(quest.length == 0)
    //     {
    //         newSchema.save((err, quest) => {
    //             if(err){
    //                 res.status(400).send({status:'false',message:"error", error:err});
    //             } else {
    //                 res.status(200).send({status:'true',message:"data added successfully", data:quest});
    //             }
    //         })
    //     }
    //     else{
    //         SSchema.findOneAndUpdate({ questName: req.body.questName }, { roomName: req.body.roomName },
    //             function (err, quest) {
    //                 if (err) {
    //                     res.status(400).send({ status: 'false', message: "error", error: err });
    //                 }
    //                 else {
    //                     res.status(200).json({ status: 'true', message: "success"});
    //                 }
    //             });
    //     }
    //     //res.status(200).json({status:'true',message:"success", data:quest});
    // })
    newSchema.save((err, schema) => {
        if(err){
            res.status(400).send({status:'false',message:"error", error:err});
        } else {
            res.status(200).send({status:'true',message:"data added successfully"});
        }
    })
}

export const getAllSchema = (req, res) =>{
    SSchema.find({}, (err, schema)=>{
        if(err){
            res.send({status:'false',message:"error", error:err});
        }
        res.status(200).json({status:'true',message:"success", data:schema});
    })
}

// export const removeSchema = (req, res) =>{
//     SSchema.remove({StudentId:188}, 
//         function(err, data) {
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 res.send(data);
//             }
//         });  
// }