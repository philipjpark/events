import express from 'express'
import './config/dotenv.js'
import cors from 'cors'
import eventsRouter from './routes/events.js';
import locationsRouter from './routes/locations.js';

const app = express()

app.use(cors())

// Use the routers for events and locations
app.use('/events', eventsRouter);
app.use('/locations', locationsRouter);

app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">Events API</h1>')
})

const PORT = process.env.PORT || 3001
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
