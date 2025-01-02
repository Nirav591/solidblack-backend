const db = require('../config/db');

exports.createCoachingRequest = async (data) => {
  const { fullName, email, phoneNumber, coachingArea, specificGoals, preferredContactMethod, bestTimeToContact } = data;

  const query = `
    INSERT INTO coaching_requests (full_name, email, phone_number, coaching_area, specific_goals, preferred_contact_method, best_time_to_contact)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  const [result] = await db.execute(query, [
    fullName,
    email,
    phoneNumber,
    coachingArea,
    specificGoals,
    preferredContactMethod,
    bestTimeToContact
  ]);

  return result;
};

exports.getAllCoachingRequests = async () => {
  const [rows] = await db.execute('SELECT * FROM coaching_requests');
  return rows;
};
