import {pickAProjectHeaderText,projectBuilderForm,projectBuilderFormName,projectBuilderFormDueDate,projectBuilderFormDescrption,sidebarCreatAProjectButton,renderProjectBuildForm,removeProjectel,addnewtaskbuttonel,renderTaskBuildForm, taskBuilderFrom} from "./DOM"
import { formatDistance } from "date-fns";
import { readprojects,rerenderCache } from "./PickAProject";
import { injectProjectsIntoSidebar,removeproject } from "./projectSidebar";
import { makeTask } from "./taskCreation";
import "./style.css"

window.readprojects = readprojects
window.addEventListener("load",rerenderCache)
window.addEventListener("load",injectProjectsIntoSidebar)
sidebarCreatAProjectButton.addEventListener("click",renderProjectBuildForm)
removeProjectel.addEventListener("click",removeproject)
addnewtaskbuttonel.addEventListener("click",renderTaskBuildForm)
taskBuilderFrom.addEventListener("submit",makeTask)


export const projectCreation = function(ProjectName,date,desc,projectID, Tasks = []){   
ProjectName;
desc;
let creationDate = new Date()
let DueDate = new Date(date)
return {
Tasks,    
projectID,
NewTask: (task) => {return Tasks.push(task)},  
getName: ()=>{return ProjectName},    
getcreationDate: ()=> {return creationDate},
getDueDate : ()=> { return DueDate},  
DueDateDistance :()=>{ return formatDistance(creationDate,DueDate)},
ProjectName,
desc,
creationDate,
DueDate 
}
}

const project1 = projectCreation("test",2027,11,25,"this is a test")
console.log(project1.DueDateDistance())

