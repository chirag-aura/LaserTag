import express from 'express';
import bodyparser from 'body-parser';
//import router from './src/routes';
import cors from 'cors';

const app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(cors());
//app.use('/v1', router)
app.use('/v1', (req,res)=>{
    res.send({data: 'Hello world'})
})

export default app;