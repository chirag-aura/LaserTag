import express from 'express';
import { addQuest, getAllQuest } from '../controllers/questController.js';

const routes = express.Router();
routes.post('/create', addQuest);
routes.get('/getquests', getAllQuest);

export default routes;