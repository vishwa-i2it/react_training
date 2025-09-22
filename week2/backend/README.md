# Backend User Data API

A Node.js Express API that exposes user data with search functionality perfect for debouncing applications. The data represents user profiles with contact information, addresses, and company details.

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
- **GET /api/data** - Get all users
- **GET /api/data/search?q=query** - Search users by name, username, email, or company
- **GET /api/data/:id** - Get specific user by ID
- **GET /api/data/company/:company** - Get users by company name

### Example API Responses

#### Get All Users
```bash
curl http://localhost:5000/api/data
```

Response:
```json
{
  "success": true,
  "message": "Users retrieved successfully",
  "data": [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    }
  ],
  "total": 15
}
```

#### Search Users
```bash
curl "http://localhost:5000/api/data/search?q=john"
```

Response:
```json
{
  "success": true,
  "message": "Found 1 users matching \"john\"",
  "data": [
    {
      "id": 11,
      "name": "Alexander Johnson",
      "username": "alex_j",
      "email": "alex.johnson@techcorp.com",
      "address": {
        "street": "Tech Avenue",
        "suite": "Suite 100",
        "city": "Silicon Valley",
        "zipcode": "94000-0001",
        "geo": {
          "lat": "37.7749",
          "lng": "-122.4194"
        }
      },
      "phone": "555-0101",
      "website": "alexjohnson.dev",
      "company": {
        "name": "TechCorp Solutions",
        "catchPhrase": "Innovation through technology",
        "bs": "revolutionize digital experiences"
      }
    }
  ],
  "total": 1,
  "query": "john"
}
```

#### Get User by ID
```bash
curl http://localhost:5000/api/data/1
```

#### Get Users by Company
```bash
curl http://localhost:5000/api/data/company/techcorp
```

## User Data Structure

The API exposes user data perfect for debouncing search applications:

### User Properties:
- **id**: Unique identifier (number)
- **name**: Full name (string)
- **username**: Username (string)
- **email**: Email address (string)
- **phone**: Phone number (string)
- **website**: Personal website (string)
- **address**: Address object with street, suite, city, zipcode, and geo coordinates
- **company**: Company object with name, catchPhrase, and business description

### Search Functionality:
The search endpoint (`/api/data/search?q=query`) searches across:
- **name**: User's full name
- **username**: User's username
- **email**: User's email address
- **company.name**: Company name

Search is case-insensitive and supports partial matches.

## Features

- ✅ Express.js server
- ✅ CORS enabled for frontend integration
- ✅ User data with comprehensive profiles
- ✅ Perfect for debouncing search applications
- ✅ Multiple API endpoints for different use cases
- ✅ Advanced search functionality across multiple fields
- ✅ Case-insensitive search with partial matching
- ✅ Rich user data with addresses and company information
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
