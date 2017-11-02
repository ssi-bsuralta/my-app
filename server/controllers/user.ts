import User from '../models/user';

export default class UserCtrl {
    model = User;

    login = (username, password, done) => {
        this.model.findOne({ username: username }, (err, user) => {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.validPassword(password)) { return done(null, false); }
            return done(null, user);
        });
    }
}
