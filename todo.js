
function addTask()
{
    var taskInput=document.getElementById("taskinput").value
    var taskList=document.getElementById("tasklist")
    if(taskInput=="")
    {
        alert("Please Enter The Task")
        return
    }
    var listItem=document.createElement('li')
    listItem.innerText=taskInput
    taskList.appendChild(listItem)

    var buttonContainer=document.createElement('div')
    listItem.appendChild(buttonContainer)
    buttonContainer.className="task-button"

    var deleteButton=document.createElement('button')
    buttonContainer.appendChild(deleteButton)
    deleteButton.innerText="Delete"
    deleteButton.onclick=function(){
        taskList.removeChild(listItem)
    }

    var completeButton=document.createElement('button')
    buttonContainer.appendChild(completeButton)
    completeButton.innerText="Complete"
    completeButton.onclick=function(){
        listItem.classList.toggle('completed')
    }
}
