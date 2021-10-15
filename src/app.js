import dotenv from 'dotenv';
import express from 'express';
import passport from 'passport';
import connect from './db/connect.js';
import routes from './routes.js';
import verifyJwt from './auth/verify-jwt.js';



dotenv.config();

passport.use(verifyJwt());

const app = express();
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const port = process.API_PORT;
const host = process.API_HOST;
app.listen(port, host, () => {
    connect();
    routes(app);
});