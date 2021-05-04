const express   = require("express");
const router    = express.Router();
const User      = require("./UserModel");

router.get("/admin/users",
    (req, res) => {
        res.send("lista de users");
    });

router.get("/admin/users/create",
    (req, res) => {
        res.render("admin/users/create");
    }); 

router.post("/users/create",
    (req, res) => {
        var email    = req.body.email;
        var password = req.body.password;
        res.json({email, password});

        //res.render("admin/users/create");
    }); 

module.exports = router;