import passwordJwt from 'passport-jwt';

export default function verifyJwt() {
    const { Strategy, ExtractJwt } = passwordJwt;
    var opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'itsasecret',
    };

    return new Strategy(opts, (jwt_payload, done) => {
        done(null, jwt_payload);
    });
}
