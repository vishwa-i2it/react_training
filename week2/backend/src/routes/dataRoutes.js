const express = require("express");
const router = express.Router();
const { 
  getAllUsers, 
  getUserById, 
  searchUsers, 
  getUsersByCompany 
} = require("../controllers/dataController");

// Routes
router.get("/", getAllUsers); // GET /api/data - Get all users
router.get("/search", searchUsers); // GET /api/data/search?q=query - Search users
router.get("/company/:company", getUsersByCompany); // GET /api/data/company/:company - Get users by company
router.get("/:id", getUserById); // GET /api/data/:id - Get user by ID

module.exports = router;
