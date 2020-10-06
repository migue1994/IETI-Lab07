module.exports = async function (context, req) {
    context.log('Adding a task to the planner');

    const task = req.body;

    let responseMessage = { response: ""};

    if (task){
        responseMessage.response = "Task created";
        task.id = (Math.random() * (100)).toString();
        context.res = {
            status: 201,
            body: {
                responseMessage,
                task
            }
        };
        return  context.res
    }else{
        responseMessage.response = "Error, no payload";
        context.res = {
            status: 403,
            body:{
                responseMessage
            }
        }
    }
}