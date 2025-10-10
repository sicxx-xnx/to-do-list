import { pickAProjectHeaderText,projectBuilderForm,projectBuilderFormName,projectBuilderFormDueDate,projectBuilderFormDescrption } from "./DOM";
import {projectCreation} from "./index"
export let Projects = JSON.parse(localStorage.getItem("projects")) || []

export function MakeProject(event){
event.preventDefault()  
const newProject = projectCreation(projectBuilderFormName.value,projectBuilderFormDueDate.value,projectBuilderFormDescrption.value)
Projects.push(newProject)
cacheProjects()  
console.log(Projects)  
}

function cacheProjects() {
const stringprojects = JSON.stringify(Projects) 
console.log(stringprojects)   
localStorage.setItem("projects",stringprojects)
Projects = JSON.parse(localStorage.getItem("projects"))
}

export function readprojects(){
return Projects    
}

export function rerenderCache() {
let i = 0    
for (const project of Projects) {
Projects[i] = projectCreation(project.ProjectName,project.DueDate,project.desc)   
}   
}