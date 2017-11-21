import * as passport from 'passport';
import { Strategy } from 'passport-local';
import * as session from 'express-session';

import { UserCtrl } from './controllers/user';

export function setPassport(myExpress) {
    myExpress.use(session({
        secret: 'test 123 321',
        resave: false,
        saveUninitialized: true
    }));
    myExpress.use(passport.initialize());
    myExpress.use(passport.session());

    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((user, done) => done(null, user));

    const userCtrl = new UserCtrl();
    passport.use(new Strategy(userCtrl.login_local));

    myExpress.post(
        '/api/login',
        passport.authenticate('local'),
        (req, res) => {
            res.json({
                id: req.user.id,
                name: req.user.name
            });
        }
    );

    myExpress.get(
        '/api/logout',
        (req, res) => {
            req.session.destroy();
            res.json({});
        }
    );
}
