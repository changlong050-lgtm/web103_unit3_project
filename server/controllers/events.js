import { pool } from "../config/database.js";

const getEvents = async(req, res) =>{
    try{
        const results = await pool.query(`SELECT * FROM events ORDER BY id ASC`)
        res.status(200).json(results.rows)
    }
    catch(error){
        res.status(409).json({
            error:error.message
        })

    }
}

const getEventById = async (req,res)=>{
    try{
        const eventId = req.params.eventId
        const results = await pool.query(`SELECT * FROM events WHERE id = $1`, [eventId])

        res.status(200).json(results.rows)
    }
    catch(error){
        res.status(409).json({
            error:error.message
        })
    }
}

const getLocations = async(req, res)=>{
    try{
        const results = await pool.query('SELECT * FROM locations ORDER BY id ASC')
        res.status(200).json(results.rows)
    }
    catch(error){
        res.status(409).json({error:error.message})

    }
}


const getLocationById = async(req,res) =>{
    try{
        const locationId = req.params.locationId
        const results = await pool.query(`SELECT * FROM locations WHERE id = $1`, [locationId])

        res.status(200).json(results.rows)
    }

    catch(error){
        res.status(409).json({error:error.message})
    }

}


export default {
    getEvents,
    getEventById,
    getLocations,
    getLocationById
}