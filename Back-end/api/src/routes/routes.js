const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const con = require("../database/database");
let router = express.Router();
const saltRounds = 10;
const verif_token = require("../middleware/token");

//USERS ROUTES

// ADD AN USER
router.post("/utilisateurs/inscription", (req, res) => {
    let verif = `SELECT email FROM utilisateurs WHERE email = '${req.body.email}';`;
    con.query(verif, (err, result) => {
        if (err) throw err;
        if (result.length) {
            res.status(200).send("This email is already in use");
        } else {
            bcrypt.hash(req.body.password, saltRounds).then((hashPassword) => {
                let sql = `INSERT INTO utilisateurs (email, prenom, pseudo, password, avatar) VALUES('${req.body.email}','${req.body.prenom}','${req.body.pseudo}','${hashPassword}','${req.body.avatar}');`;
                con.query(sql, (err, result) => {
                    if (err) throw err;
                    res.status(200).send("users well inserted");
                });
            });
        }
    });
});

module.exports = router;