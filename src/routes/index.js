import express from "express";
import playerRoutes from "./playerRoutes.js";
import questRoutes from "./questRoutes.js";
import schemaRoutes from "./schemaRoutes.js";
import { getAllRooms } from "../controllers/roomController.js";

const router = express.Router();

router.use('/playerInfo', playerRoutes);
router.use('/quest', questRoutes);
router.get('/getrooms', getAllRooms)
router.use('/schema', schemaRoutes)

export default router;