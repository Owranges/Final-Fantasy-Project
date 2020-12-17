const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const con = require("../database/database");
let router = express.Router();
const saltRounds = 10;
const verif_token = require("../middleware/token");