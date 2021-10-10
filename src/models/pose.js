import mongoose from 'mongoose';

const PoseSchema = new mongoose.Schema(
    {
        name: { type: String, default: true },
        sanskrit: { type: String, default: true },
        cues: { type: String, default: true },
    },
    { timestamps: true }
);

export default mongoose.model('Pose', PoseSchema);
