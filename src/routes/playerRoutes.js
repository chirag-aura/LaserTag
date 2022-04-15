import express from "express";
import { playerCreate, playerJoin, playerClose, playerEvent, playerLeave, playerProperties } from "../controllers/playerController";

const playerRoutes = express.Router();

playerRoutes.post('/create', playerCreate);

playerRoutes.post('/join', playerJoin);

playerRoutes.post('/close', playerClose);

playerRoutes.post('/event', playerEvent);

playerRoutes.post('/leave', playerLeave);

playerRoutes.post('/properties', playerProperties);

export default playerRoutes