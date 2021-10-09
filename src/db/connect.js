import mongoose from 'mongoose';
// import config from '../../config/config.js';
import dotenv from 'dotenv';

dotenv.config();

function connect() {
    const dbUri = process.env.dbUri;

    return mongoose
        .connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Database connected');
        })
        .catch((error) => {
            console.log('db error', error);
            process.exit(1);
        });
}

export default connect;