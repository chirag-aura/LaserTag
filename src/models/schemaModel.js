import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const ShemaSchema = new Schema({
    gameTime:{
        type:String,
        unique:true,
        required:true
    },
    playAreaSize:{
        type:String,
        required:true
    },
    playerSpawnTime:{
        type:Number,
        required:true
    },
    gameType:{
        type:String,
        required:true
    }
})