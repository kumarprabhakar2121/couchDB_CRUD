const express = require("express");
const router = express.Router();

var dbCtrl = require("../controllers/dbCtrl");

router.route("/").get(dbCtrl.getAllDbs);

router.route("/").post(dbCtrl.createDB);

router.route("/drop").delete(dbCtrl.dropDB);

module.exports = router;
