// Define controller functions for events.
//Controllers folder define functions that handle specific actions related to events. efine functions or modules that handle specific actions related to events and locations. 

import { pool } from '../config/database.js';

//Action: getAllEvents
const getAllEvents = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM events ORDER BY id ASC');
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Action: getEventById
//Need to fix getEventById: potential security issue. Vulnerable to SQL injection attacks.
const getEventById = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const selectQuery = `SELECT location, title, date, time, image FROM events WHERE id = ${eventId}`;
    const results = await pool.query(selectQuery);

    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

// Action: Get events with filtering by location
// const getEventsByLocation = async (req, res) => {
//   try {
//     // Get the location query parameter from the request
//     const location = req.query.location;

//     // Construct the SQL query to filter events by location
//     const selectQuery = `SELECT * FROM events WHERE location = $1`;
//     const results = await pool.query(selectQuery, [location]);

//     res.status(200).json(results.rows);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

const getEventsByLocation = async (req, res) => {
  try {
    // Get the location query parameter from the request
    const location = req.params.location; // Use params instead of query for URL parameters

    // Construct the SQL query to filter events by location
    const selectQuery = `SELECT * FROM events WHERE location = $1`;
    const results = await pool.query(selectQuery, [location]);

    if (results.rows.length === 0) {
      // If no events found, return a message or appropriate response
      res.status(404).json({ message: 'No events found for this location.' });
    } else {
      // If events found, return them
      res.status(200).json(results.rows);
    }
  } catch (error) {
    // Log the error for debugging
    console.error(error);
    res.status(400).json({ error: error.message });
  }
};

export default {
  getAllEvents,
  getEventById,
  getEventsByLocation
};
