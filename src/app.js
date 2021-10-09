import express from 'express';
// import config from '../config/config.js';
import connect from './db/connect.js';
import routes from './routes.js';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.port;
const host = process.env.host;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
    connect();
    routes(app);
});