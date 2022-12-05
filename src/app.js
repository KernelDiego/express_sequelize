import express from 'express'
import morgan from 'morgan'

const app = express()

// Import routes
import projectRoutes from './routes/projects.routes.js'
import taskRoutes from './routes/tasks.routes.js'

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use('/projects', projectRoutes)
app.use('/tasks', taskRoutes)

export default app
