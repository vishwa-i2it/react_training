# Backend Tree API

A Node.js Express API that exposes hierarchical tree data perfect for frontend tree view components. The data represents a company organization structure with departments, teams, and employees.

## Project Structure

```
backend/
├── src/
│   ├── controllers/
│   │   └── dataController.js    # API controllers
│   ├── data/
│   │   └── sampleData.js        # Sample data structure
│   ├── middleware/
│   │   └── cors.js              # CORS configuration
│   ├── routes/
│   │   └── dataRoutes.js        # API routes
│   └── app.js                   # Express app configuration
├── server.js                    # Server entry point
├── package.json                 # Dependencies and scripts
└── README.md                    # This file
```

## Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```
   
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

## API Endpoints

The server runs on `http://localhost:5000` by default.

### Available Endpoints

- **GET /** - Welcome message and available endpoints
- **GET /api/health** - Health check endpoint
- **GET /api/data/tree** - Get complete tree structure (perfect for tree view components)
- **GET /api/data** - Get flattened data (backward compatibility)
- **GET /api/data/node/:id** - Get specific tree node by ID
- **GET /api/data/:id** - Get data by ID (searches entire tree)
- **GET /api/data/department/:department** - Get department data with teams and employees

### Example API Responses

#### Get Tree Data (Perfect for Tree View Components)
```bash
curl http://localhost:5000/api/data/tree
```

Response:
```json
{
  "success": true,
  "message": "Tree data retrieved successfully",
  "data": {
    "id": "root",
    "name": "Company Organization",
    "type": "root",
    "expanded": true,
    "children": [
      {
        "id": "dept-engineering",
        "name": "Engineering Department",
        "type": "department",
        "expanded": true,
        "metadata": {
          "totalEmployees": 2,
          "avgSalary": 71500,
          "location": "Multiple"
        },
        "children": [
          {
            "id": "team-frontend",
            "name": "Frontend Team",
            "type": "team",
            "expanded": true,
            "metadata": {
              "teamLead": "John Doe",
              "totalMembers": 1
            },
            "children": [
              {
                "id": 1,
                "name": "John Doe",
                "type": "employee",
                "expanded": false,
                "metadata": {
                  "email": "john.doe@example.com",
                  "age": 30,
                  "role": "Senior Frontend Developer",
                  "salary": 75000,
                  "joinDate": "2020-01-15",
                  "skills": ["JavaScript", "React", "Node.js", "MongoDB"],
                  "address": {
                    "street": "123 Main St",
                    "city": "New York",
                    "zipCode": "10001",
                    "country": "USA"
                  }
                }
              }
            ]
          }
        ]
      }
    ]
  }
}
```

#### Get Specific Tree Node
```bash
curl http://localhost:5000/api/data/node/dept-engineering
```

#### Get Data by Department
```bash
curl http://localhost:5000/api/data/department/Engineering
```

#### Get Flattened Data (Backward Compatibility)
```bash
curl http://localhost:5000/api/data
```

## Tree Data Structure

The API exposes a hierarchical tree structure perfect for tree view components:

### Node Types:
- **root**: Company organization root
- **department**: Department level (Engineering, Design, Marketing, Sales)
- **team**: Team level within departments
- **employee**: Individual employee level

### Node Properties:
- **id**: Unique identifier
- **name**: Display name
- **type**: Node type (root, department, team, employee)
- **expanded**: Whether node is expanded by default
- **children**: Array of child nodes
- **metadata**: Additional information specific to node type

### Metadata by Type:
- **Department**: totalEmployees, avgSalary, location
- **Team**: teamLead, totalMembers
- **Employee**: email, age, role, salary, joinDate, skills, address

## Features

- ✅ Express.js server
- ✅ CORS enabled for frontend integration
- ✅ Hierarchical tree data structure
- ✅ Perfect for frontend tree view components
- ✅ Multiple API endpoints for different use cases
- ✅ Tree node expansion/collapse support
- ✅ Rich metadata for each node type
- ✅ Backward compatibility with flattened data
- ✅ Error handling middleware
- ✅ Health check endpoint
- ✅ Development mode with nodemon

## Environment Variables

Create a `.env` file in the backend directory:
```
PORT=5000
NODE_ENV=development
```

## Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with auto-restart
- `npm test` - Run tests (not implemented yet)
