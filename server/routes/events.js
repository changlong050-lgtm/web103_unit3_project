import express from 'express'

import EventController from '../controllers/events.js'

const router = express.Router()
router.get('/events', EventController.getEvents)
router.get('/event/:eventId', EventController.getEventById)
router.get('/locations', EventController.getLocations)
router.get('/location/:locationId', EventController.getLocationById)

export default router

