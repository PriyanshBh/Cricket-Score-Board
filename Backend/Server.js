  const express = require('express');
  const cors = require('cors');
  const dotenv = require('dotenv');
  const { connectDB } = require('./config/db');
  const matchRoutes = require('./routes/matchRoutes');
  const playerRoutes = require('./routes/playerRoutes');
  const teamRoutes = require('./routes/teamRoutes');
  const errorMiddleware = require('./middlewares/errorMiddleware');
  // Optional: Add additional middleware imports here (e.g., morgan, helmet, cors, rateLimit)

  dotenv.config();
  connectDB();

  const app = express();
  app.use(cors()); // Add this line to enable CORS

  // Middleware
  app.use(express.json());
  // Optional: Add additional middleware use here (e.g., morgan, helmet, cors)

  // Routes
  app.use('/api/match', matchRoutes);
  app.use('/api/player', playerRoutes);
  app.use('/api/team', teamRoutes);

  // Error Handling Middleware
  app.use(errorMiddleware);

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });


