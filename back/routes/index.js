const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const db = require("../db/db")
const passport = require('passport');
const { Usuario } = require("../models/index")

router.post("/user/register", function(req,res){
    Usuario.create(req.body)
        .then(res.send("Se creo el usuario"))
})

router.post('/user/login', passport.authenticate('local'), (req, res) => {
    res.send(req.user)
})

/*
<<<<<<< Este es el midelware de passport que vamos a usar mas adelante >>>>>>>

function isLogedIn(req, res, next) {
    if (req.session.passport.user) {
        next();
    } else {
        console.log("no se logueo")
    }
}
*/

module.exports = router