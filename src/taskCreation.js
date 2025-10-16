import { activeProject } from "./projectSidebar";
import { taskBuilderFormNameel,taskBuilderFormDueDate,TaskMainHolder, UnrenderTaskeditForm } from "./DOM";
import { cacheactiveproject } from "./cache";
import { cacheProjects } from "./PickAProject";
const taskCreation = function(Name,dueDate,parentProjectId,taskID,complete=false)  {
let i = 1
let Actions = {};    
return { 
complete,      
Name,
dueDate,
parentProjectId,
taskID,
newAction: (value)=>{Actions[`action${i++}`]=value}}       
}

export function makeTask(event){
event.preventDefault()   
const taskID = Math.floor(Math.random() * 1000);   
const newTask = taskCreation(taskBuilderFormNameel.value,taskBuilderFormDueDate.value,activeProject.projectID,taskID)
activeProject.Tasks.push(newTask)
cacheactiveproject()
cacheProjects()
injectTaskIntoDomAtTimeOfCreation(newTask)
return newTask
}
export function injectTaskstoDom(e) {
TaskMainHolder.innerHTML = ""    
activeProject.Tasks.forEach(element => {
const taskHolderel = document.createElement("div")
taskHolderel.setAttribute("id", element.taskID)
taskHolderel.style.width = "50%"
taskHolderel.style.padding = "10px"
const taskName = document.createElement("p")
taskName.innerText = element.Name
taskName.style.fontSize = "1.2rem"
const CheckBox = document.createElement("input")
CheckBox.checked = element.complete
CheckBox.setAttribute("type", "checkbox")   
CheckBox.addEventListener('click', (event) => {
  event.preventDefault();
});
const TopLevelDiv = document.createElement("div")
TopLevelDiv.style.display = "flex"
TopLevelDiv.style.justifyContent = "space-between"
TopLevelDiv.style.width = "100%"


const BottomDiv = document.createElement("div")
BottomDiv.style.display = "flex"
BottomDiv.style.justifyContent = "space-between"
BottomDiv.style.width = "100%"

const Dueby = document.createElement("p")
Dueby.innerText = element.dueDate
Dueby.classList.add("dueby")
BottomDiv.append(Dueby)
TopLevelDiv.append(taskName,CheckBox)
taskHolderel.append(TopLevelDiv,BottomDiv)
TaskMainHolder.append(taskHolderel)
taskHolderel.addEventListener("click",(e)=>{

if (activeTask.hasOwnProperty('id') || activeTask === false ) {
activeTask.id.style.removeProperty("border")    
}    
activeTask = activeProject.Tasks.find(p=>p.taskID.toString() === e.currentTarget.id.toString())
activeTask.id = taskHolderel
activeTask.id.style.border = "1px solid black" 
console.log(e.currentTarget.id)
console.log(activeTask)
return activeTask    
})
});    
}

export let activeTask = {}

export function setactiveTask (e){
if (activeTask) {
    
}    
activeTask = activeProject.Tasks.find(p=>p.taskID.toString() === e.currentTarget.id.toString())
activeTask.id = taskHolderel
console.log(e.currentTarget.id)
console.log(activeTask)
return activeTask
}
export function CompleteTask() {
if (activeTask.hasOwnProperty('id') || activeTask === false ) {
activeTask.complete = true
TaskMainHolder.innerHTML = ""
injectTaskstoDom() 
cacheProjects()    
} else {
alert("Task Not Selected! Please Select a Task to Complete!")    
}    
   
}

function injectTaskIntoDomAtTimeOfCreation(newTask) {
const taskHolderel = document.createElement("div")
taskHolderel.setAttribute("id",newTask.taskID)
taskHolderel.style.width = "50%"
taskHolderel.style.padding = "10px"
const taskName = document.createElement("p")
taskName.innerText = newTask.Name
taskName.style.fontSize = "1.2rem"
const CheckBox = document.createElement("input")
CheckBox.checked = newTask.complete
CheckBox.setAttribute("type", "checkbox")   
CheckBox.addEventListener('click', (event) => {
  event.preventDefault();
});
const TopLevelDiv = document.createElement("div")
TopLevelDiv.style.display = "flex"
TopLevelDiv.style.justifyContent = "space-between"
TopLevelDiv.style.width = "100%"


const BottomDiv = document.createElement("div")
BottomDiv.style.display = "flex"
BottomDiv.style.justifyContent = "space-between"
BottomDiv.style.width = "100%"

const Dueby = document.createElement("p")
Dueby.innerText = newTask.dueDate
Dueby.classList.add("dueby")
BottomDiv.append(Dueby)
TopLevelDiv.append(taskName,CheckBox)
taskHolderel.append(TopLevelDiv,BottomDiv)
TaskMainHolder.append(taskHolderel)
taskHolderel.addEventListener("click",(e)=>{

if (activeTask.hasOwnProperty('id') || activeTask === false ) {
activeTask.id.style.removeProperty("border")    
} else {  
activeTask = activeProject.Tasks.find(p=>p.taskID.toString() === e.currentTarget.id.toString())
activeTask.id = taskHolderel
activeTask.id.style.border = "1px solid black" 
console.log(e.currentTarget.id)
console.log(activeTask)
return activeTask        
  }});
}

export function EditTask (e){
e.preventDefault()    
if (activeTask.hasOwnProperty('id') || activeTask === false ) {
if (taskBuilderFormNameel.value !== "") {
activeTask.Name = taskBuilderFormNameel.value
}    
if (taskBuilderFormDueDate.value !== "") {
activeTask.dueDate = taskBuilderFormDueDate.value    
}
TaskMainHolder.innerHTML = ""
injectTaskstoDom() 
cacheProjects()    
UnrenderTaskeditForm()
} else {
alert("Task Not Selected! Please Select a Task to Edit!")   
UnrenderTaskeditForm() 
}      
}
