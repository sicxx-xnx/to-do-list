import { MakeProject } from "./PickAProject"
import { EditTask, makeTask, setactiveTask } from "./taskCreation"
import { CompleteTask } from "./taskCreation"
const topHeaderButton = document.querySelector(".pickAProject")
const pickAProjectHeaderText = document.querySelector(".pickAProjectText")
const projectBuilderForm = document.querySelector("#ProjectBuilder")
projectBuilderForm.addEventListener("submit",MakeProject)
const projectBuilderFormName = document.querySelector("#ProjectBuilder  #Name")
const projectBuilderFormDueDate = document.querySelector("#ProjectBuilder  #dueDate")
const projectBuilderFormDescrption = document.querySelector("#ProjectBuilder  #projectDescription")
const projectformholder = document.querySelector(".projectBuilder")
const sidebar = document.querySelector(".SideBar")
const sidebarCreatAProjectButton = document.querySelector(".CreatAProjectSideBar")
const closeProjectBuilderForm = document.querySelector("#formClose")
const pickAProjectDropdownholderel = document.querySelector(".pickAProjectDropDown")
const sidebarprojectholder = document.querySelector(".sidebarprojectholder")
const removeProjectel = document.querySelector(".removeProject")
const addnewtaskbuttonel = document.querySelector(".creatTask")
const taskBuilderFormNameel = document.querySelector("#Taskname")
const taskBuilderFormDueDate = document.querySelector("#taskDueDate")
const taskBuilderFormHolder = document.querySelector(".taskbuilderformholder")
const taskBuilderFrom = document.querySelector("#taskBuilder")
const taskformclosebuttonel = document.querySelector("#taskFormClose")
const mainBodyHolder = document.querySelector(".bodyHolder")
const TaskMainHolder = document.querySelector(".MainTaskHolder")
const completeTaskButton = document.querySelector("#CompleteTask")
const editTaskButton = document.querySelector("#editTask")
const submitTask = document.querySelector("#submitTask")
editTaskButton.addEventListener("click", renderTaskeditForm)

completeTaskButton.addEventListener("click",CompleteTask)

function renderProjectBuildForm(){
projectformholder.classList.replace("hidden","flex")  
closeProjectBuilderForm.addEventListener("click",UnrenderProjectBuildForm)  
}
function UnrenderProjectBuildForm(){
projectformholder.classList.replace("flex","hidden")     
}

function renderTaskBuildForm(){
taskBuilderFormHolder.classList.replace("hidden","flex")  
taskformclosebuttonel.addEventListener("click",UnrenderTaskBuildForm)  
}
function UnrenderTaskBuildForm(){
taskBuilderFormHolder.classList.replace("flex","hidden")     
}


function renderpickAProjectDropDown(){
pickAProjectDropdownholderel.classList.replace("hidden","flex")
topHeaderButton.removeEventListener("click",renderpickAProjectDropDown)
topHeaderButton.addEventListener("click",unrenderpickaprojectdropdown)      
}

function unrenderpickaprojectdropdown(){
pickAProjectDropdownholderel.classList.replace("flex","hidden")
topHeaderButton.removeEventListener("click",unrenderpickaprojectdropdown)
topHeaderButton.addEventListener("click",renderpickAProjectDropDown)    
}

export { sidebarprojectholder,pickAProjectHeaderText,projectBuilderForm,projectBuilderFormName,projectBuilderFormDueDate,projectBuilderFormDescrption,
projectformholder,renderProjectBuildForm,sidebarCreatAProjectButton,sidebar,UnrenderProjectBuildForm,pickAProjectDropdownholderel,renderpickAProjectDropDown,
topHeaderButton,removeProjectel,unrenderpickaprojectdropdown,addnewtaskbuttonel,taskBuilderFormNameel,taskBuilderFormDueDate,taskBuilderFormHolder,taskBuilderFrom,
renderTaskBuildForm, UnrenderTaskBuildForm, TaskMainHolder }

function renderTaskeditForm(){
taskBuilderFormHolder.classList.replace("hidden","flex")  
taskformclosebuttonel.addEventListener("click",UnrenderTaskeditForm)  
submitTask.innerHTML = "Edit Task"
taskBuilderFrom.removeEventListener("submit",makeTask)
taskBuilderFrom.addEventListener("submit",EditTask)
}
export function UnrenderTaskeditForm(){
taskBuilderFormHolder.classList.replace("flex","hidden")  
submitTask.innerHTML = "Creat Task" 
taskBuilderFrom.removeEventListener("submit",EditTask)
taskBuilderFrom.addEventListener("submit", makeTask)  
taskBuilderFormNameel.value = ""
taskBuilderFormDueDate.value = ""
}