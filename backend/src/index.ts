import express from 'express'
import mediaRoutes from './routes/media'
import cors from 'cors'

const app = express()

app.use(cors()) // Allows frontend to talk to backend from a different port
app.use(express.json()) // Lets backend read JSON in request bodies

app.use('/api/media', mediaRoutes) // Mount our media routes

app.get('/', (req, res) => {
  res.send('Backend is working!')
})

const PORT = process.env.PORT || 4000
app.listen(Number(PORT), '0.0.0.0', () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
