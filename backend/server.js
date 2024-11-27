const express = require('express');
const cors = require('cors');

const app = express();

// CORS Configuration
const corsOptions = {
  origin: 'http://localhost:4200', // Allow requests only from the frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Middleware for parsing JSON
app.use(express.json());

// Debugging middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next();
});

// Handle preflight OPTIONS requests
app.options('*', cors(corsOptions));

// API Endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start the server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
