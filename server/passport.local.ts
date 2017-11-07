import * as passport from 'passport';
import { Strategy } from 'passport-local';
import * as session from 'express-session';

import UserCtrl from './controllers/user';

export default function setPassport(app) {
    app.express.use(session({
        secret: 'keyboard cat 123',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    }));
    app.express.use(passport.initialize());
    app.express.use(passport.session());

    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((user, done) => done(null, user));

    const userCtrl = new UserCtrl();
    passport.use(new Strategy(userCtrl.login_local));

    app.express.post(
        '/api/login',
        passport.authenticate('local'),
        (req, res) => {
            res.json({
                id: req.user.id,
                name: req.user.name
            });
        }
    );
}
