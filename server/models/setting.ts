import mongoose from 'mongoose';

// Define Interface
export interface ISetting extends mongoose.Document {
    owner: string;
    data: any;
}

// Define Schema
const settingSchema = new mongoose.Schema({
    owner: { type: String, required: true },
    data: { type: Object }
});

export const Setting = mongoose.model<ISetting>('Setting', settingSchema);
