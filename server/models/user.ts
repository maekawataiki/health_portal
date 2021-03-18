import mongoose from 'mongoose';

// Define Interface
export interface IUser extends mongoose.Document {
    email: string;
    password: string;
}

// Define Schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

export const User = mongoose.model<IUser>('User', userSchema);
