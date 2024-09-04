const mongoose = require('mongoose');

const MatchSchema = new mongoose.Schema({
  team1: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
  team2: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
  overs: { type: Number, required: true },
  currentInning: { type: Number, default: 1 }, // 1 or 2
  innings: {
    inning1: {
      score: { type: Number, default: 0 },
      wickets: { type: Number, default: 0 },
      balls: { type: Number, default: 0 }
    },
    inning2: {
      score: { type: Number, default: 0 },
      wickets: { type: Number, default: 0 },
      balls: { type: Number, default: 0 }
    }
  },
  players: {
    team1: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
    team2: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }]
  },
  extras: {
    team1: {
      wides: { type: Number, default: 0 },
      noBalls: { type: Number, default: 0 },
      byes: { type: Number, default: 0 },
      legByes: { type: Number, default: 0 },
      total: { type: Number, default: 0 }
    },
    team2: {
      wides: { type: Number, default: 0 },
      noBalls: { type: Number, default: 0 },
      byes: { type: Number, default: 0 },
      legByes: { type: Number, default: 0 },
      total: { type: Number, default: 0 }
    }
  },
  ballsBowled: {
    team1: { type: Number, default: 0 },
    team2: { type: Number, default: 0 }
  },
  currentBattingTeam: { type: String, required: true }
});

module.exports = mongoose.model('Match', MatchSchema);
