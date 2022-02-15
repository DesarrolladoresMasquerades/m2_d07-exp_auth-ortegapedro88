const router = require("express").Router();

/* GET home page */


router.get("/edit", (req, res, next) => {
  res.render("../views/users/edit-profile");
});

router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
