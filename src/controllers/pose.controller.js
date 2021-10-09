import lodash from 'lodash';
import Post from '../models/post.js';

const { get } = lodash;

export async function createPoseHandler(req, res) {
    const body = req.body;
    await Post.create(body);
    return res.sendStatus(201);
}

export async function getPoseHandler(req, res) {
    const postId = get(req, 'params.poseId');
    const post = await Post.findById(postId);
    return res.send(post);
}

export async function listPoseHandler(req, res) {
    const posts = await Post.find({});
    return res.send(posts);
}