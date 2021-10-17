import mongoose from 'mongoose';

const SequenceSchema = new mongoose.Schema (
    {
        sequenceName: { type: String, default: true },
        poses: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Pose'
        }],
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    },
    { timestamps: true }
);

export default mongoose.model('Sequence', SequenceSchema);
