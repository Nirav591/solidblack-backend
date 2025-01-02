const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const visaRoutes = require('./routes/visaRoutes'); // Fixed issue here
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./utils/errorHandler');
const coachingRoutes = require('./routes/coachingRoutes')

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/visa', visaRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/coaching', coachingRoutes);


// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 6310;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
