const api = (app, mongoose) => {
    const {userApi} = require('./userApi');

    userApi(app, mongoose);
    
    // Just to check that the API is alive
    app.get('/api/', (req, res) => {
        res.send({message: 'API is alive'});
    });
};

module.exports = {api};