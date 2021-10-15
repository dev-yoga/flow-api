import jwt from 'jsonwebtoken';
import User from '../models/user.js';

const { sign } = jwt;

export async function signUp(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
        res.json({
            success: false,
            msg: 'Send username and password plz',
        });
        return;
    }

    new User({ username: username, password: password }).save((err) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Save failed',
            });
            return;
        }
        res.sendStatus(201);
    });
}

export async function signIn(req, res) {
    const { username, password } = req.body;
    User.findOne({ username }).then((user) => {
        if (!user) {
            res.status(401).send({ success: false, msg: 'no user found' });
            return;
        }

        user.comparePassword(password, (err, isMatch) => {
            if (err || !isMatch) {
                res.status(401).send({ success: false, msg: 'bad password' });
                return;
            }

            const secret = process.env.JWT_SECRET;
            const token = sign(user.toJSON(), secret);
            res.json({success: true, token: token, user_id: user._id });
        });
    });
}
