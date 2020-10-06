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

const getTasks = () => {
    return tasks;
}

const addTask = (task) => {
    tasks.push(task);
}

exports.getTasks = getTasks;
exports.addTask = addTask;