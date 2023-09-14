const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, trim: true },
  role: {
    type: String,
    enum: ["member", "trainer", "admin"],
    default: "member",
  },
  workouts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Workout",
    },
  ],
});

const User = model("User", UserSchema);

module.exports = User;
