const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const matchRoutes = require('./routes/matchRoutes');
const playerRoutes = require('./routes/playerRoutes');
const teamRoutes = require('./routes/teamRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/api/match', matchRoutes);
app.use('/api/player', playerRoutes);
app.use('/api/team', teamRoutes);

// Error Handling Middleware
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
