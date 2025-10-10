import {pickAProjectHeaderText,projectBuilderForm,projectBuilderFormName,projectBuilderFormDueDate,projectBuilderFormDescrption} from "./DOM"
import { formatDistance } from "date-fns";
import { readprojects,rerenderCache } from "./PickAProject";
import "./style.css"

window.readprojects = readprojects
window.addEventListener("load",rerenderCache)


export const projectCreation = function(ProjectName,date,desc){
ProjectName;
desc;
let creationDate = new Date()
let DueDate = new Date(date)
return {
creatTask: (taskName,TaskDueDate,taskDesc) =>{return {parentProject: ProjectName,taskName,TaskDueDate,taskDesc}},    
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

