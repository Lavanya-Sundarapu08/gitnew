const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

// Protected route
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Profile fetched successfully",
    user: req.user,
  });
});

module.exports = router;
