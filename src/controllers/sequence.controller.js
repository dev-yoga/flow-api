

// read / GET
export function getSequenceHandler(req, res) {
    const sequence = { 
        name: 'this is a sequence'
    };
    return res.send(sequence);
}

