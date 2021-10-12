import Sequence from '../models/sequence.js';

// read / GET
export function getSequenceHandler(req, res) {
    const sequence = { 
        name: 'this is a sequence'
    };
    return res.send(sequence);
}

export async function listSequenceHandler(req, res) {
    const sequences = await Sequence.find({}).populate('poses');
    return res.send(sequences);
}
