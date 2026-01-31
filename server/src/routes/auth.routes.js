const express = require("express");
console.log("✅ auth.routes.js loaded");
const { register } = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", register);

module.exports = router;
