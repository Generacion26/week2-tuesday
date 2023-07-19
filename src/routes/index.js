const express = require("express");
const router = express.Router();
const projectsData = require("../projectsData.json");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/about-me", (req, res) => {
  return res.render("about-me");
});

router.get("/projects", (req, res) => {
  return res.render("projects", { projectsData });
});

router.get("/projects/:id", (req, res) => {
  const { id } = req.params;
  const project = projectsData.find((project) => project.id == id);
  return res.render("projects-id", { project });
});

module.exports = router;
