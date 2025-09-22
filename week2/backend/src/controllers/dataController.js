const userData = require("../data/sampleData");

// Get all users
const getAllUsers = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: userData,
      total: userData.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving users",
      error: error.message,
    });
  }
};

// Get user by ID
const getUserById = (req, res) => {
  try {
    const { id } = req.params;
    const user = userData.find(u => u.id === parseInt(id));
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "User retrieved successfully",
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving user",
      error: error.message,
    });
  }
};

// Search users by name (case-insensitive)
const searchUsers = (req, res) => {
  try {
    const { q } = req.query;
    
    if (!q || q.trim() === '') {
      return res.status(400).json({
        success: false,
        message: "Search query is required",
      });
    }

    const searchTerm = q.toLowerCase().trim();
    const filteredUsers = userData.filter(user => 
      user.name.toLowerCase().includes(searchTerm) ||
      user.username.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm) ||
      user.company.name.toLowerCase().includes(searchTerm)
    );

    res.status(200).json({
      success: true,
      message: `Found ${filteredUsers.length} users matching "${q}"`,
      data: filteredUsers,
      total: filteredUsers.length,
      query: q
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error searching users",
      error: error.message,
    });
  }
};

// Get users by company
const getUsersByCompany = (req, res) => {
  try {
    const { company } = req.params;
    const companyName = company.replace(/-/g, ' ').toLowerCase();
    
    const filteredUsers = userData.filter(user => 
      user.company.name.toLowerCase().includes(companyName)
    );

    res.status(200).json({
      success: true,
      message: `Found ${filteredUsers.length} users from companies matching "${company}"`,
      data: filteredUsers,
      total: filteredUsers.length,
      company: company
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving users by company",
      error: error.message,
    });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  searchUsers,
  getUsersByCompany,
};
