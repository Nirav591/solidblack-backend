const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const visaRoutes = require('./routes/visaRoutes'); // Fixed issue here
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./utils/errorHandler');
const coachingRoutes = require('./routes/coachingRoutes')
const cors = require('cors');
const newsletterRoutes = require('./routes/newsletterRoutes');



// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

const allowedOrigins = [
  'http://localhost:3000',        // Allow localhost
  'http://solidblackabroad.com',          // Allow another domain (example.com)
  "https://solidblackabroad.com"

];

app.use(cors({
  origin: function (origin, callback) {
    // If the origin is not specified (i.e., the request is from a local file, or it's a server-to-server request),
    // allow it (since CORS can be an issue during development).
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('CORS policy does not allow access from this origin'), false);
    }
  },
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/visa', visaRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/coaching', coachingRoutes);
app.use('/api/newsletter', newsletterRoutes);




// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 6320;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


