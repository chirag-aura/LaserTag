import express from "express";
import { playerCreate, playerJoin, playerClose, playerEvent, playerLeave, playerProperties, addPlayerInfo, getPlayerInfo } from "../controllers/playerController.js";
import { addRoom, addPlayer } from "../controllers/roomController.js";

const playerRoutes = express.Router();

playerRoutes.post('/create', addRoom);

playerRoutes.post('/join', addPlayer);

playerRoutes.post('/close', playerClose);

playerRoutes.post('/event', playerEvent);

playerRoutes.post('/leave', playerLeave);

playerRoutes.post('/properties', playerProperties);

playerRoutes.post('/addPlayerInfo', addPlayerInfo);

playerRoutes.get('/getPlayerInfo', getPlayerInfo);

export default playerRoutes