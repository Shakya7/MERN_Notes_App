const express=require("express");
const userController=require("../controllers/userController");

const router=express.Router();

router.route("/login-form").post(userController.login);

module.exports=router;