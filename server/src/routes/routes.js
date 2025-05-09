import { Router } from "express";
import promptControllers from "../controllers/prompt-controllers.js";

const routes = Router();

routes.post("/api/prompt", promptControllers.sendText);

export default routes;
