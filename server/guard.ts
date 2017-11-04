export default (req, res, next) => {
    if (!req.user) {
        res.status(401).send('please relog');
    } else {
        next();
    }
};
