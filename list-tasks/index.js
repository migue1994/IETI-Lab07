const tasks = require('../services/TaskService');

module.exports = async function (context, req) {
    context.log('Adding a task to the planner');

    context.res = {
        status: 200,
        body: tasks.getTasks()
    };

    return context.res;
}