module.exports = async function (context, req) {
    context.log('Adding a task to the planner');

    const tasks = [
        {
            title: 'task app frontend',
            responsible:{
                name: 'Miguel Rivera',
                email: "miguel@email.com"
            }
        },
        {
            title: 'task app backend',
            responsible:{
                name: 'Miguel Rivera',
                email: "miguel@email.com"
            }
        },
    ];

    context.res = {
        status: 200,
        body: tasks
    };

    return context.res;
}