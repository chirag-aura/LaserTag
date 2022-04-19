import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const QuestSchema = new Schema({
    questName:{
        type:String,
        required:true
    },
    roomName:{
        type:String,
        required:true
    }
        
})

//export default model('user',QuestSchema);