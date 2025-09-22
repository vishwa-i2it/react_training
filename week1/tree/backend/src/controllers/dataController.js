const productCatalogueData = require("../data/sampleData");

// Get tree data
const getTreeData = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Tree data retrieved successfully",
      data: productCatalogueData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving tree data",
      error: error.message,
    });
  }
};

module.exports = {
  getTreeData,
};
