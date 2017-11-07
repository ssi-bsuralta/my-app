import * as ActiveDirectory from 'ActiveDirectory';

import { User } from '../models/user';

export class UserCtrl {
    model = User;

    login_local = (username, password, done) => {
        this.model.findOne({ username: username }, (err, user) => {
            if (err) { return done(err); }
            if (!user) { return this.login_active_directory(username, password, done); }
            if (!user.validPassword(password)) { return this.login_active_directory(username, password, done); }
            return done(null, user);
        });
    }

    login_active_directory = (username, password, done) => {
        console.log('trying ad credentials');

        const ad = new ActiveDirectory({
            url: 'ldap://utdc01.surveysampling.com',
            baseDN: 'DC=SurveySampling,DC=com'
        });

        username = username.toLowerCase();
        username = username.replace('@surveysampling.com', '');
        username = username.replace('.', '_');
        const ad_username = username + '@surveysampling.com';

        ad.authenticate(ad_username, password, (err1, auth) => {
            if (err1) { return done(err1); }
            if (!auth) { return done(null, false); }

            this.model.findOne({ username: username }, (err2, user) => {
                if (err2) { return done(err2); }
                if (!user) { return done(null, false); }
                return done(null, user);
            });
        });
    }
}
