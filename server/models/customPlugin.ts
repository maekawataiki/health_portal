import mongoose from 'mongoose';

// Define Interface
export interface ICustomPlugin extends mongoose.Document {
    unique_id: string;
    author: string;
    scripts: object[];

    version: string;
    title: string;
    description: string;
    reviews: mongoose.Types.ObjectId[];
    doc: string;
}

// Define Schema
const customPluginSchema = new mongoose.Schema({
    unique_id: { type: String },
    author: { type: String, required: true },
    scripts: { type: Object },

    version: { type: String },
    title: { type: String },
    description: { type: String },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    doc: { type: String },
});

export const CustomPlugin = mongoose.model<ICustomPlugin>('CustomPlugin', customPluginSchema);
