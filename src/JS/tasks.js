
function idGenerator(){
    var date = new Date();
    var id =
        date.getDate().toString() +
        date.getHours().toString() +
        date.getMinutes().toString() +
        date.getSeconds().toString() +
        date.getMilliseconds().toString();
    return id;
}

function newTask(description)
{
    var task = {
        id: idGenerator(),
        value: description
    };
    taskList.push(task);
}



function insertNewTask()
{
    var textInput = document.getElementById("text-input");
    if (textInput.value != ""){
        newTask(textInput.value);
        updatePage();
    }
}

function clearAllTask()
{
    taskList.splice(0,taskList.length);
    updatePage();
}

$(".delete").on("click", function()
{    
    var x = $(this).parent().parent().attr(["data-id"]);
    
    taskList.forEach(element => 
        {
            if(element.id === x){
            taskList.splice(taskList.indexOf(element),taskList.indexOf(element) + 1);}
        })
});

updatePage();

$("#save-button").on("click", insertNewTask);
$("#clear-button").on("click", clearAllTask);
