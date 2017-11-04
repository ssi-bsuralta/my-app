import User from '../models/user';
import * as ActiveDirectory from 'ActiveDirectory';

export default class UserCtrl {
    model = User;

    login_local = (username, password, done) => {
        this.model.findOne({ username: username }, (err, user) => {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.validPassword(password)) { return done(null, false); }
            return done(null, user);
        });
    }

    login_active_directory = (username, password, done) => {
        const ad = new ActiveDirectory({
            url: 'ldap://utdc01.surveysampling.com',
            baseDN: 'DC=SurveySampling,DC=com'
        });

        username = username.toLowerCase();
        username = username.replace('@surveysampling.com', '');
        username = username.replace('.', '_');
        const ad_username = username + '@surveysampling.com';

        ad.authenticate(ad_username, password, (err0, auth) => {

            if (err0) { return done(err0); }
            if (!auth) { return done(null, false); }

            this.model.findOne({ username: username }, (err, user) => {
                if (err) { return done(err); }
                if (!user) { return done(null, false); }
                return done(null, user);
            });
        });
    }
}
