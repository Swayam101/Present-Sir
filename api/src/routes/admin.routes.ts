import { Router } from "express";
import controllers from "../controllers";

const router = Router();

router.post("/students");
router.get("/", controllers.admin.getAllStudents);

export default router;
