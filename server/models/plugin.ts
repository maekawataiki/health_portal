import mongoose from 'mongoose';

// Define Interface
export interface IPlugin extends mongoose.Document {
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
const pluginSchema = new mongoose.Schema({
    unique_id: { type: String, unique: true },
    author: { type: String, required: true },
    scripts: { type: Object },

    version:  { type: String },
    title: { type: String },
    description: { type: String },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    doc: { type: String },
});

export const Plugin = mongoose.model<IPlugin>('Plugin', pluginSchema);
