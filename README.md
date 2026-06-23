# web103_unit3_project

# WEB103 Project 3 - *Kitchen Meet*

Submitted by: **Liam Wu**

About this web app: **Kitchen Meet is a virtual cooking meetup community in San Francisco where users explore kitchens around the city and discover the cooking events happening at each one — from Hot Pot nights to Sushi masterclasses. Users select a location through a visual interface, navigate to that location's detail page, and view all the events hosted there.**

Time spent: **8** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->

- [x] **The web app uses React to display data from the API**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured Events table**
  - [x]  **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [x]  **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**
- [x] **The web app displays a title.**
- [x] **Website includes a visual interface that allows users to select a location they would like to view.**
  - [x] *Note: A non-visual list of links to different locations is insufficient.* 
- [x] **Each location has a detail page with its own unique URL.**
- [x] **Clicking on a location navigates to its corresponding detail page and displays list of all events from the `events` table associated with that location.**

The following **optional** features are implemented:

- [x] An additional page shows all possible events
  - [x] Users can sort *or* filter events by location.
- [ ] Events display a countdown showing the time remaining before that event
  - [ ] Events appear with different formatting when the event has passed (ex. negative time, indication the event has passed, crossed out, etc.).

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:

![](project3_demo.gif)

GIF created with ... **LICECap**

## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add.

**Database design (two tables + foreign key).** The biggest design decision was splitting the data into a `locations` table and an `events` table instead of cramming everything into one. Because many events happen at the same location, putting location fields directly on each event would duplicate the same location info over and over and make updates painful. Instead, `events` holds a `location_id` foreign key referencing `locations(id)`, so each location is stored once.

**Seeding order / parallel async bug.** My first `reset.js` called the seed functions like this:
```js
seedLocationsTable()
seedEventsTable()
```
Without `await`, both ran in parallel, so events tried to insert before locations existed. That triggered a foreign key error: `Key (location_id)=(1) is not present in table "locations"`. The fix was to run them sequentially so locations are fully committed before events insert:
```js
const setup = async () => {
    await seedLocationsTable()
    await seedEventsTable()
}
```

**Drop order / referential integrity.** When recreating tables I hit `cannot drop table locations because other objects depend on it`. Postgres won't drop a table that another table depends on. Since `events.location_id` references `locations`, I had to drop the dependent table first — or use `CASCADE`:
```sql
DROP TABLE IF EXISTS events CASCADE;
DROP TABLE IF EXISTS locations CASCADE;
```

**Parameterized queries.** Learned to use parameterized queries instead of string interpolation to safely pull a row by id in the controller:
```js
const eventId = req.params.eventId
const results = await pool.query(`SELECT * FROM events WHERE id = $1`, [eventId])
```

**Controllers vs routers.** Got clearer on the layering: controllers build the API logic (the database queries and responses), and routers match a URL path to the right controller function.

**Client structure / services folder.** New to me this project was the `services` folder. Instead of writing `fetch` calls directly in page components, I put them in `EventsAPI.jsx` and `LocationsAPI.jsx` (`getAllEvents`, `getEventById`, `addEvent`, `deleteEvent`, etc.), which keeps the data-fetching logic reusable and cuts down on duplicate code.

**Reading the starter code.** A lot of the components and pages came incomplete, so I had to read through them in dependency order — `main.jsx` → `App.jsx` → `pages/` → `components/` → `services/` — to understand the flow before filling them in.

**Designing the DB around what the frontend needs.** A subtle lesson: `LocationEvents.jsx` accessed fields like `location.city`, `location.state`, and `location.zip` that I hadn't included in my table. I learned to design the database schema based on what the frontend actually consumes.

**Date formatting.** Postgres stores the `DATE` type as a full UTC timestamp, so JS received it as an ISO string like `...T06:00:00.000Z`. I fixed the display in `Event.jsx` by slicing out just the date portion.

**Filter dropdown with React state.** Built a location filter where picking an option updates `selectedLocation` state, which re-renders the component and recomputes `filteredEvents` automatically:
```jsx
<select value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)} className='select-option'>
    <option value='all'>All Locations</option>
    {locations.map(location => (
        <option key={location.id} value={location.id}>{location.name}</option>
    ))}
</select>
```
The flow: user picks an option → `e.target.value` is the location id → `setSelectedLocation` updates state → React re-renders → `events.filter(event => event.location_id === parseInt(value))` produces the filtered list.

**useEffect for data fetching.** Used `useEffect` to fetch location and event data after the component mounts, then set state. Without it, the location and events would stay empty arrays and never render.

## License

Copyright [2026] [Liam Wu]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
