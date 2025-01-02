const { createCoachingRequest, getAllCoachingRequests } = require('../models/coachingModel');

exports.submitCoachingRequest = async (req, res) => {
  const { fullName, email, phoneNumber, coachingArea, specificGoals, preferredContactMethod, bestTimeToContact } = req.body;

  try {
    const result = await createCoachingRequest({
      fullName,
      email,
      phoneNumber,
      coachingArea,
      specificGoals,
      preferredContactMethod,
      bestTimeToContact
    });

    res.status(201).json({ message: 'Coaching request submitted successfully!', id: result.insertId });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong', error: err.message });
  }
};

exports.getAllCoachingRequests = async (req, res) => {
  try {
    const requests = await getAllCoachingRequests();
    res.status(200).json(requests);
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong', error: err.message });
  }
};
