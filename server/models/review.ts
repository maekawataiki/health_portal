import mongoose, { Schema } from 'mongoose';

// Define Interface
export interface IReview extends mongoose.Document {
    rating: number;
    title: string;
    description: string;
    target: mongoose.Types.ObjectId;
}

const reviewSchema = new mongoose.Schema({
    rating: { type: Number },
    title: { type: String },
    description: { type: String },
    target: { type: Schema.Types.ObjectId, ref: 'Plugin' }
})

export const Review = mongoose.model<IReview>('Review', reviewSchema);
