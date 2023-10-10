import express from 'express';
import EventsController from '../controllers/events.js';

const router = express.Router();

// Define your routes for events here
router.get('/', EventsController.getAllEvents);
router.get('/:eventId', EventsController.getEventById);

// Create an API endpoint to get events by location
router.get('/location/:location', EventsController.getEventsByLocation);

export default router;
