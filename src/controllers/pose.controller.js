import lodash from 'lodash';
import Pose from '../models/pose.js';

const { get } = lodash;

// create / POST
export async function createPoseHandler(req, res) {
    const body = req.body;
    await Pose.create(body);
    return res.sendStatus(201);
}

// read / GET
export async function getPoseHandler(req, res) {
    const poseId = get(req, 'params.poseId');
    const pose = await Pose.findById(poseId);

    if (!pose) {
        return res.sendStatus(404);
    }

    return res.send(pose);
}

export async function listPoseHandler(req, res) {
    const poses = await Pose.find({});/* .populate('poses')*/
    return res.send(poses);
}

// update / PUT

export async function updatePoseHandler(req, res) {
    const poseId = await get(req, 'params.poseId');
    const update = req.body;

    const pose = await Pose.findById(poseId);

    if (!pose) {
        return res.sendStatus(404);
    }

    const updatedPose = await Pose.findOneAndUpdate({ poseId }, update, { new:true });

    return res.send(updatedPose);
}

// delete / DELETE

export async function deletePoseHandler(req, res) {
    const poseId = get(req, 'params.poseId');
    const pose = await Pose.findByIdAndDelete(poseId);

    if (!pose) {
        return res.sendStatus(404);
    }

    return res.sendStatus(200);
}

export async function searchPoseHandler(req, res) {
    const terms = get(req, 'params.terms');
    const posts = await Pose.find({ $or: [
        { name : { $regex: terms, '$options': 'i' } },
        { sanskrit : { $regex: terms, '$options': 'i' } },
    ] });
    return res.send(posts);
}