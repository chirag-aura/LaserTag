import express from "express";
import { addSchema, getAllSchema } from "../controllers/schemaController.js";

const schemaRoutes = express.Router();

schemaRoutes.post('/create', addSchema);

schemaRoutes.get('/', getAllSchema);

//schemaRoutes.post('/delete', deleteSchema);

export default schemaRoutes