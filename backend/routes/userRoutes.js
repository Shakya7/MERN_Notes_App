const express=require("express");
const userController=require("../controllers/userController");

const router=express.Router();

router.route("/").get(userController.getAllUsers).post(userController.createUser);
router.route("/:id").put(userController.updateUser);
router.route("/login").post(userController.login);

module.exports=router;