const express = require('express');
const { submitCoachingRequest, getAllCoachingRequests } = require('../controllers/coachingController');

const router = express.Router();

router.post('/submit', submitCoachingRequest);
router.get('/requests', getAllCoachingRequests);

module.exports = router;
