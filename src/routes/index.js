import express from "express";
import playerRoutes from "./playerRoutes.js";
import questRoutes from "./questRoutes.js";

const router = express.Router();

router.use('/playerInfo', playerRoutes);
router.use('/quest', questRoutes);

export default router;