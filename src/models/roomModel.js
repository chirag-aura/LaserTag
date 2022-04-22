import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const RoomSchema = new Schema({
    roomId:{
        type:String,
        required:true
    },
    players:[{
        playerId: String,
        playerName: String,
        score:Number,
        battery:Number,
        team:Number,
    }]
})

//export default model('user',QuestSchema);