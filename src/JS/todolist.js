
var taskList = [];

function updatePage(){
    var taskListSection = document.getElementById("task-list-section");
    var taskItem = "";
    taskListSection.innerHTML = "";
    
    taskList.forEach(
        (task) => 
        {
            taskItem = (
                '<div class="task-list-item" data-id="' + task.id +
                '"><h3 class="title task-description">' + task.value +
                '</h3><div class="icons"><i class="material-icons delete" alt="delete button">delete</i></div></div>'
            );
            taskListSection.innerHTML += taskItem;
        }
    )
}

var $auxBoard = $("#aux-board-section");

function toggleAuxBoardDisplayStatus()
{
    if ($auxBoard.css("display") === "none")
    {
            $auxBoard.css("display", "block");
        } else {
            $auxBoard.css("display", "none");
    }
}

$("#new-task-button").on("click", toggleAuxBoardDisplayStatus);
$("#cancel-button").on("click", toggleAuxBoardDisplayStatus);
