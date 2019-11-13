'use strict';
module.exports = function (app) {
    //Initialize models
    let stickyModel = require('./models/todo');

    //Initialize routes
    let stickyRoutes = require('./routes/todo-route');
    stickyRoutes(app);
};