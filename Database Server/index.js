const express = require("express");
const port = 8000;

const app = express();
const expresslayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");

app.set("view engine","ejs");
app.set("views","./views");
app.set("layout extractStyles",true);
app.set("layout extractScripts",true);

app.use(expresslayouts);
app.use("/", require("./routes/index"));

app.listen(port,function(err){
    if(err){
        console.log(err);
    }
    console.log("Server running",port);
});