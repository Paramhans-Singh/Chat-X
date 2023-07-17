const express = require("express");
const router = express.Router();
const usercontroller = require("../controller/userscontroller");

router.get("/profile",usercontroller.profile);
module.exports = router;