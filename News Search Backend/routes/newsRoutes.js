import express from "express"
import { addNewsController, searchNewsController } from "../controllers/newsControllers.js";

const router= express.Router();

router.post("/postnews",addNewsController);
router.get("/searchNews", searchNewsController);

export default router;