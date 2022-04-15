import express from "express";
import playerRoutes from "./playerRoutes";
import questRoutes from "./questRoutes";

const router = express.Router();

router.use('/playerInfo', playerRoutes);
router.use('/quest', questRoutes);

export default router;