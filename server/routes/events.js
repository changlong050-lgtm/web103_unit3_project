import express from 'express'

import EventController from '../controllers/events.js'

const router = express.Router()
router.get('/events', EventController.getEvents)
router.get('/locations', EventController.getLocations)

export default router

