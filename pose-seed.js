import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Pose from './src/models/post.js';
import fs from 'fs';

dotenv.config();

// connect to mongo db

const dbUri = process.env.dbUri;

mongoose
    .connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        //open up text file
        let rawdata = fs.readFileSync('seedposes.json');
        
        // parses into json
        let poses = JSON.parse(rawdata);
        
        //now have an array of poses
        //console.log(poses);
        
        //loop through them
        for (const pose of poses) {
            //insert them into database
            // console.log(pose);
            Pose.create(pose);
        }
    })
    .catch((error) => {
        console.log('db error', error);
    });
