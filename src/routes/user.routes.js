import { Router } from "express";
import {registerUser} from "../controllers/user.controller.js"
import { upload } from './../middlewares/multer.middleware.js';
const router = Router();

router.route("/register").post(upload.fields([
    {name: "avatar",
        maxCount:1
    },
    {
        name: "coverImage",
        maxCount:1,
    }
]),registerUser)

router.route("/").get((req,res)=>{
    res.status(200).json({message:"welcome to the user page"})
})

export default router;