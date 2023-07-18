const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/about-me", (req, res) => {
  return res.render("about-me");
});

router.get("/projects", (req, res) => {
  return res.render("projects");
});

router.get("/projects/:id", (req, res) => {
  const { id } = req.params;
  return res.send(`Este es mi proyecto de id = ${id}`);
});

module.exports = router;
