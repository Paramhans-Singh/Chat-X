const express = require("express");
const router = express.Router();
const homecontroller = require("../controller/homecontroller");

console.log("route-loaded");

router.get("/",homecontroller.home);
router.use("/users",require("./user"));

module.exports=router;