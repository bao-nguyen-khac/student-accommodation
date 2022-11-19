const demoRoute = require('./demo');
function route(app) {
    
    app.use('/api/demo', demoRoute);
}

module.exports = route;
