import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  // username : String basic noob log we can rather create object and define properties
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'password must be required'],
  },
}, {timestamp:true}// to add created at and updated at
);

export const User = mongoose.model('User', userSchema);
// if we give a name to a model like User
// whenever it go to mongoose database this name become plural eg. users
