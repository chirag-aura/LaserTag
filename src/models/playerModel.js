import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const PlayerSchema = new Schema({
    playerId:{
        type:String,
        unique:true,
        required:true
    },
    roomId:{
        type:String,
        required:true
    },
    score:{
        type:Number,
        required:true
    },
    battery:{
        type:Number,
        required:true
    },
    team:{
        type:Number,
        required:true
    }
})

//export default model('user',QuestSchema);