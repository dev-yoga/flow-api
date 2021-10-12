
import lodash from 'lodash';
import Sequence from '../models/sequence.js';

const { get } = lodash;

// read / GET
export async function getSequenceHandler(req, res) {
    const sequenceId = get(req, 'params.sequenceId');
    const sequence = await Sequence.findById(sequenceId);

    if (!sequence) {
        return res.sendStatus(404);
    }

    return res.send(sequence);
}

export async function listSequenceHandler(req, res) {
    const sequences = await Sequence.find({}).populate('poses');
    return res.send(sequences);
}

// create / POST

export async function createSequenceHandler(req, res) {
    const body = req.body;
    await Sequence.create(body);
    return res.sendStatus(201);
}

// Update

export async function updateSequenceHandler(req, res) {
    const sequenceId = get(req, 'params.sequenceId');
    const update = req.body;

    const sequence = await Sequence.findById(sequenceId);

    if (!sequence) {
        return res.sendStatus(404);
    }

    const updatedSequence = await Sequence.findOneAndUpdate({ sequenceId }, update, { new:true });

    return res.send(updatedSequence);
}

// Delete