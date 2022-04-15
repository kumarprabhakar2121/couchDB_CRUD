const express = require("express");
const router = express.Router();

var userCtrl = require("../controllers/userCtrl");

router.route("/").post(userCtrl.createUser);

router.route("/").get(userCtrl.getAllUsers);

router.route("/:doc_id").get(userCtrl.getUser);

router.route("/update").put(userCtrl.updateUser);

router.route("/delete").delete(userCtrl.deleteUser);

module.exports = router;
