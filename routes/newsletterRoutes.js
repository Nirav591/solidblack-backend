// routes/newsletterRoutes.js
const express = require('express');
const router = express.Router();
const newsletterController = require('../controllers/newsletterController');

// Define the route to subscribe to the newsletter
router.post('/subscribe', newsletterController.subscribeNewsletter);

module.exports = router;
