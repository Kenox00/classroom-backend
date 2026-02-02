import express from 'express';
import subjectRouter from './routes/subject';
import cors from 'cors';

const app = express();
const PORT = 8000;


app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}))
// Middleware
app.use(express.json());

// Routes

app.use('/api/subjects', subjectRouter)

app.get('/', (req, res) => {
  res.json({ message: 'Classroom API Server - Ready to serve!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
