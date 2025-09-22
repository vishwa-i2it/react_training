const express = require("express");
const router = express.Router();
const { getTreeData } = require("../controllers/dataController");

// Routes
router.get("/tree", getTreeData); // GET /api/data/tree - Get tree structure

module.exports = router;
