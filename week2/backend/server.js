require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📊 API endpoints available at:`);
  console.log(`   - Health check: http://localhost:${PORT}/api/health`);
  console.log(`   - All users: http://localhost:${PORT}/api/data`);
  console.log(`   - Search users: http://localhost:${PORT}/api/data/search?q=query`);
  console.log(`   - User by ID: http://localhost:${PORT}/api/data/:id`);
  console.log(`   - Users by company: http://localhost:${PORT}/api/data/company/:company`);
});
