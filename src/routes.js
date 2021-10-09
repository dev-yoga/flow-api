import { createPoseHandler, getPoseHandler, listPoseHandler } from './controllers/pose.controller.js';

export default function(app) {
    app.get('/healthcheck', (req, res) => res.sendStatus(200));
    app.get('/api/pose/:poseId', getPoseHandler);
    app.post('/api/pose', createPoseHandler);
    app.get('/api/pose/', listPoseHandler);
}
