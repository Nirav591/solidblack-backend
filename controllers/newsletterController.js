// controllers/newsletterController.js
const newsletterModel = require('../models/newsletterModel');

// Controller function to handle new subscriber registration
const subscribeNewsletter = async (req, res) => {
  const { email } = req.body;

  // Check if email exists in the database
  try {
    const exists = await newsletterModel.isEmailExists(email);

    if (exists) {
      return res.status(400).json({ message: 'This email is already subscribed' });
    }

    // Add the new email to the database
    await newsletterModel.addSubscriber(email);
    res.status(200).json({ message: 'Successfully subscribed to the newsletter!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error subscribing to the newsletter', error });
  }
};

// Controller function to get all newsletter subscribers
const getSubscribers = async (req, res) => {
  try {
    const subscribers = await newsletterModel.getAllSubscribers();
    res.status(200).json(subscribers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching subscribers', error });
  }
};

module.exports = {
  subscribeNewsletter,
  getSubscribers
};
