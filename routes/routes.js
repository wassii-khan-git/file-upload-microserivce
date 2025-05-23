import express from "express";
import { UploadFile } from "../controller/controller.js";
import multer from "multer";

// router
const router = express.Router();
// upload
const upload = multer({ dest: "./uploads" });

// store users
router.post("/fileanalyse", upload.single("upfile"), UploadFile);

export default router;
