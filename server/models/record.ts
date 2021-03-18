import mongoose from 'mongoose';

// Define Interface
export interface IRecord extends mongoose.Document {
    owner: string;
    date: Date;
    data: any;
}

// Define Schema
const recordSchema = new mongoose.Schema({
    owner: { type: String, required: true },
    date: { type: Date, required: true },
    data: { type: Object }
});

export const Record = mongoose.model<IRecord>('Record', recordSchema);
