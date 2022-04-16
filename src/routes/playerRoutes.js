import express from "express";
import { playerCreate, playerJoin, playerClose, playerEvent, playerLeave, playerProperties, addPlayerInfo, getPlayerInfo } from "../controllers/playerController.js";

const playerRoutes = express.Router();

playerRoutes.post('/create', playerCreate);

playerRoutes.post('/join', playerJoin);

playerRoutes.post('/close', playerClose);

playerRoutes.post('/event', playerEvent);

playerRoutes.post('/leave', playerLeave);

playerRoutes.post('/properties', playerProperties);

playerRoutes.post('/addPlayerInfo', addPlayerInfo);

playerRoutes.get('/getPlayerInfo', getPlayerInfo);

export default playerRoutes