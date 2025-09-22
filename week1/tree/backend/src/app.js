const express = require('express');
const corsMiddleware = require('./middleware/cors');
const dataRoutes = require('./routes/dataRoutes');

const app = express();

// Middleware
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/data', dataRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the Tree Data API',
    endpoints: {
      health: '/api/health',
      treeData: '/api/data/tree',
      allData: '/api/data',
      treeNodeById: '/api/data/node/:id',
      dataById: '/api/data/:id',
      dataByDepartment: '/api/data/department/:department'
    },
    description: 'This API provides hierarchical tree data perfect for frontend tree view components'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

module.exports = app;
