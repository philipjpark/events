import express from 'express';
import LocationsController from '../controllers/locations.js';

const router = express.Router();

// Define your routes for locations here
router.get('/', LocationsController.getAllLocations);
router.get('/:locationId', LocationsController.getLocationById);

export default router;
