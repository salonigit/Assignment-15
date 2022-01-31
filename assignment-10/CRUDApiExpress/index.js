// import express from "express"
// import routes from "./routes/index"

// const app =express()

// app.use(express.json())
// app.use('/', routes)

// const db = require("./models");
// db.sequelize.sync();

// var auth = require("./auth.js")();
// app.use(auth.initialize());
// app.listen(8080, () => {
//     console.log("server is running")
// })

var express = require("express");
var bodyParser = require("body-parser");
var jwt = require("jwt-simple");
var auth = require("./auth.js")();
var users = require("./users.js");
var cfg = require("./config.js");
var app = express();

app.use(bodyParser.json());
app.use(auth.initialize());

app.get("/", function(req, res) {
    res.json({
        status: "My API is alive!"
    });
});

app.get("/user", auth.authenticate(), function(req, res) {
    const id=req.user.id;
    console.log(users.id)
    for(let i=0;i<users.length;i++){
        if(users[i].id===id){
            res.json(users[i]);
        }
    }
    
});

app.post("/token", function(req, res) {
    if (req.body.email && req.body.password) {
        var email = req.body.email;
        var password = req.body.password;
        var user = users.find(function(u) {
            return u.email === email && u.password === password;
        });
        if (user) {
            var payload = {
                id: user.id
            };
            var token = jwt.encode(payload, cfg.jwtSecret);
            res.json({
                token: token
            });
        } else {
            console.log("jhgjhghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
            res.sendStatus(401);
        }
    } else {
        console.log("jhgjhghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
        res.sendStatus(401);
    }
});

app.listen(3000, function() {
    console.log("My API is running...");
});

// module.exports = app;