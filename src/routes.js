import passport from 'passport';
import { searchPoseHandler, updatePoseHandler, createPoseHandler, getPoseHandler, listPoseHandler, deletePoseHandler } from './controllers/pose.controller.js';
import { userSequenceHandler, createSequenceHandler, deleteSequenceHandler, getSequenceHandler, listSequenceHandler, updateSequenceHandler } from './controllers/sequence.controller.js';
import { signUp, signIn } from './controllers/user.controller.js';

export default function(app) {
    app.get('/healthcheck', (req, res) => res.sendStatus(200));
    app.post('/api/signup', signUp);
    app.post('/api/signin', signIn);
    app.get('/api/pose/:poseId', passport.authenticate('jwt', { session: false }), getPoseHandler);
    app.post('/api/pose', passport.authenticate('jwt', { session: false }), createPoseHandler);
    app.get('/api/pose/', passport.authenticate('jwt', { session: false }), listPoseHandler);
    app.put('/api/pose/:poseId', passport.authenticate('jwt', { session: false }), updatePoseHandler);
    app.delete('/api/pose/:poseId', passport.authenticate('jwt', { session: false }), deletePoseHandler);
    app.get('/api/sequence/:sequenceId', passport.authenticate('jwt', { session: false }), getSequenceHandler);
    app.get('/api/sequence', passport.authenticate('jwt', { session: false }), listSequenceHandler);
    app.post('/api/sequence', passport.authenticate('jwt', { session: false }), createSequenceHandler);
    app.put('/api/sequence/:sequenceId', passport.authenticate('jwt', { session: false }), updateSequenceHandler);
    app.delete('/api/sequence/:sequenceId', passport.authenticate('jwt', { session: false }), deleteSequenceHandler);
    app.get('/api/pose/search/:terms', passport.authenticate('jwt', { session: false }), searchPoseHandler);
    app.get('/api/sequence/user/:user', passport.authenticate('jwt', { session: false }), userSequenceHandler);

}

