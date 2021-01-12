const jwt = require("jsonwebtoken");
<<<<<<< HEAD
<<<<<<< HEAD
=======
const config = require("../modules/config")
>>>>>>> 2f5cad6076b5d087975015f9060a3943b297ab37
=======
const config = require("../modules/config")
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b

const verif_token = (req, res, next) => {
  let auth = req.headers["authorization"];


<<<<<<< HEAD
<<<<<<< HEAD
  jwt.verify(auth, "secret", (err, result) => {
=======
  jwt.verify(auth, config.secret, (err, result) => {
>>>>>>> 2f5cad6076b5d087975015f9060a3943b297ab37
=======
  jwt.verify(auth, config.secret, (err, result) => {
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b
    if (err) {
      res.status(200).send(err);
    } else if (result.length <= 0) {
      res.status(200).send(result);
    } else {
      next();
    }
  });
};

module.exports = verif_token;