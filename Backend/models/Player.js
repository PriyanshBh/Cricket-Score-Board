const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  runs: { type: Number, default: 0 },
  ballsFaced: { type: Number, default: 0 },
  wickets: { type: Number, default: 0 },
  oversBowled: { type: Number, default: 0 },
  runsConceded: { type: Number, default: 0 },
  isBowler: { type: Boolean, default: false },
  isBatsman: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Player', playerSchema);
