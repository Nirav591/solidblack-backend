const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const visaRoutes = require('./routes/visaRoutes'); // Fixed issue here
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./utils/errorHandler');
const coachingRoutes = require('./routes/coachingRoutes')
const cors = require('cors');


// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

const allowedOrigins = [
  'http://localhost:3000',        // Allow localhost
  'http://solidblackabroad.com/',          // Allow another domain (example.com)

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

app.post('/api/subscribe', (req, res) => {
  const { email } = req.body;

  // Check if the email is valid
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
  }

  // Insert the email into the database
  const query = 'INSERT INTO newsletter_subscribers (email) VALUES (?)';
  db.query(query, [email], (err, result) => {
      if (err) {
          return res.status(500).json({ message: 'Error subscribing to the newsletter', error: err });
      }
      res.status(200).json({ message: 'Successfully subscribed to the newsletter!' });
  });
});


// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 6320;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


