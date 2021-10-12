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

// create / POST

export async function createSequenceHandler(req, res) {
    const body = req.body;
    await Sequence.create(body);
    return res.sendStatus(201);
}


//Need the CUD
//passing an array of object ids for the pose not actual pose