 
 /**
 * Todo endpoint route definitions.
 * This file defines how the API URI will look like
 */

'use strict';
module.exports = function (app) {
    const todoController = require('../controllers/todo-controller');
    // To-do Routes for search and create.
    app.route('/todos')
        .get(todoController.list)
        .post(todoController.post);

    // Todo Routes for get, update and delete.
    app.route('/todos/:todoId')
        .get(todoController.get)
        .put(todoController.put)
        .delete(todoController.delete);
};