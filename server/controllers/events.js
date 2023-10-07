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
const getEventById = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const selectQuery = `SELECT title, date, time, image FROM events WHERE id = ${eventId}`;
    const results = await pool.query(selectQuery);

    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  getAllEvents,
  getEventById,
};
