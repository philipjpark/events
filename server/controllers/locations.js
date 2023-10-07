// Define other controller functions for locations.

import { pool } from '../config/database.js';

const getAllLocations = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM locations ORDER BY id ASC');
    res.status(200).json(results.rows);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getLocationById = async (req, res) => {
  try {
    const locationId = req.params.locationId;
    const selectQuery = `SELECT name, address, city, state, zip FROM locations WHERE id = ${locationId}`;
    const results = await pool.query(selectQuery);

    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

export default {
  getAllLocations,
  getLocationById,
};
