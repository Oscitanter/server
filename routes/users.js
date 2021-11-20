const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users");

router.get("/", UsersController.getAllUsers);
router.post("/", UsersController.postUser);
router.get("/:id", UsersController.getUser);
router.put("/:id", UsersController.putUser);
router.delete("/:id", UsersController.deleteUser);

module.exports = router;
