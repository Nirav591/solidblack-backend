const express = require('express');
const { addVisaRequest, getVisaRequests, getVisaRequest } = require('../controllers/visaController');
const router = express.Router();

// POST - Add Visa Request
router.post('/add', addVisaRequest);

// GET - Get All Visa Requests
router.get('/', getVisaRequests);

// GET - Get Visa Request by ID
router.get('/:id', getVisaRequest);

module.exports = router;
