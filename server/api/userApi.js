let userApi = (app, mongoose) => {
    const {User} = require('../db/userModel');

    // POST - Sign up new user
    app.post('/api/users', (req, res) => {
        const username = req.body.username;
        const token = req.body.token;

        User.findOne({ username })
            .then((user) => {
                console.log('Found user: ' + user);
                if (!user) {
                    console.log('No user');

                    let user = new User({
                        username: username,
                        tokens: [{ token }]
                    });

                    user.save()
                        .then(() => {
                            console.log('Sign up OK!');
                            res.json({ message: 'New user added' });
                        })
                        .catch((err) => {
                            console.log('Error signing up', err);
                            res.json({ err: err });
                        });

                } else {
                    // User exists
                    console.log(user.tokens);
                    let hasToken = false;

                    user.tokens.map((t) => {
                        if(t.token === token) {
                            hasToken = true;
                            console.log('Token is already in Db');
                        }
                    })    

                    if (!hasToken) {
                        console.log('New token needs to be added');
                        user.tokens.push({token});
                        user.save();
                        res.json({message: 'New token added'});
                        
                    } else {
                        res.json({message: 'Have username and token for user. All is OK'});
                    }
                }
            })
            .catch((err) => {
                console.log('Error fetching user', err);
            });

    });

    app.get('/api/user', (req, res) => {
        res.json({message: 'Got user'});
    });

};

module.exports = {userApi};