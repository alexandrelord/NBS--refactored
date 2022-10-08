import mongoose, { Schema } from 'mongoose';

interface IProject {
    name: string;
    city: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    entities: string;
    objective: string;
    description: string;
    duration: {
        start: number;
        end: number;
    };
    status: string;
    // image: string;
    // author: Schema.Types.ObjectId;
}

const ProjectSchema: Schema = new Schema<IProject>(
    {
        name: { type: String, required: true },
        city: { type: String, required: true },
        coordinates: {
            lat: { type: Number, required: true },
            lng: { type: Number, required: true }
        },
        entities: { type: String, required: true },
        objective: { type: String, required: true },
        description: { type: String, required: true },
        duration: {
            start: { type: Number, required: true },
            end: { type: Number, required: true }
        },
        status: { type: String, enum: ['No Ejecutado', 'Ejecutado'], required: true }
        // image: { type: String, required: true },
        // author: { type: Schema.Types.ObjectId, ref: 'User', required: true }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IProject>('Project', ProjectSchema);
