import {pool} from './database.js'
import './dotenv.js'
import {locationData, eventData} from '../data/eventsData.js'

const createLocationsTable = async()=>{
    const createLocationsQuery = `
        DROP TABLE IF EXISTS events;
        DROP TABLE IF EXISTS locations;

        CREATE TABLE IF NOT EXISTS locations (
            id INTEGER PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            neighborhood VARCHAR(255),
            description TEXT,
            lat DECIMAL(9,6),
            lng DECIMAL(9,6)
        );
    `

    try{
        const res = await pool.query(createLocationsQuery)
        console.log('\n locations table created successfully \n')
    }
    catch(error){
        console.log('error createing locations table', error)

    }
}


const seedLocationsTable = async()=>{
    await createLocationsTable()

    for (const location of locationData){
        const insertQuery = `
            INSERT INTO locations (id, name, neighborhood, description, lat, lng)
            VALUES ($1, $2, $3, $4, $5, $6)
        `

        const values = [location.id, location.name, location.neighborhood, location.description, location.lat, location.lng]

        try{
            await pool.query(insertQuery, values)
            console.log(`[OK] ${location.name} added successfully`)
        }
        catch(error){
            console.error('error inserting location',error)
        }
    }
}


const createEventsTable = async()=>{
    const createTableQuery = `
        DROP TABLE IF EXISTS events;

        CREATE TABLE IF NOT EXISTS events(
            id INTEGER PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            dish_id INTEGER,
            location_id INTEGER REFERENCES locations(id),
            date DATE,
            host VARCHAR(255),
            skill_level VARCHAR(50),
            imageurl TEXT
        )
    `

    try{
        const res = await pool.query(createTableQuery)
        console.log('\n events table created successfully\n')
    }
    catch(error){
        console.log('error createing evnets table', error)
    }
}

const seedEventsTable = async()=>{
    await createEventsTable()

    for (const event of eventData){
        const insertQuery = `
            INSERT INTO events (id, title, dish_id, location_id, date, host, skill_level, imageurl)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `

        const values = [event.id, event.title, event.dishId, event.locationId, event.date, event.host, event.skillLevel, event.imageurl]

        try{
            await pool.query(insertQuery, values)
            console.log(`[OK] ${event.title} added succesuuly`)
        }
        catch(error){
            console.error('error inserting event', error)
        }
    }

}
const setup = async () => {
    await seedLocationsTable()
    await seedEventsTable()
}

setup()