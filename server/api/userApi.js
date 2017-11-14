let userApi = (app, mongoose) => {
    const {User} = require('../models/user');

    // POST - Sign up new user
    app.post('/api/users', (req, res) => {
        console.log('POST user', req.body);
        console.log(req.body.username);
        console.log("=====================");

        const tokens = [{token: req.body.token}];

        let user = new User({
            username: req.body.username,
            tokens: tokens
        });

        user.save()
            .then(() => {
                console.log('Sign up OK!');
                res.json({message: 'Create OK'});
            })
            .catch((err) => {
                console.log('Error signing up', err);
                res.json({err: err});
            });
    });

    app.get('/api/user', (req, res) => {
        res.json({message: 'Got user'});
    });

};

module.exports = {userApi};