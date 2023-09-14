const { Schema, model } = require("mongoose");

const WorkoutSchema = new Schema({
  name: { type: String, unique: true, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const Workout = model("Workout", WorkoutSchema);

module.exports = Workout;
