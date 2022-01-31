const express=require("express");
const userController=require("../controllers/userController");
const noteController=require("../controllers/noteController");

const router=express.Router();

router.route("/login-form").post(userController.login);
router.route("/signup-form").post(userController.createUser);
router.route("/get-notes").get(userController.protect,noteController.getAllNotesOfUser);
router.route("/create-note").post(userController.protect,noteController.createNoteFromUser);
router.route("/delete-note/:id").delete(userController.protect,noteController.deleteNoteFromProfile);
router.route("/update-note/:id").patch(userController.protect,noteController.updateNote);

module.exports=router;