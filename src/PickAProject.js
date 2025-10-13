import { pickAProjectHeaderText,projectBuilderForm,projectBuilderFormName,projectBuilderFormDueDate,projectBuilderFormDescrption,UnrenderProjectBuildForm,topHeaderButton,renderProjectBuildForm,renderpickAProjectDropDown} from "./DOM";
import {projectCreation} from "./index"
import { setcacheasactiveproject,activeProject } from "./projectSidebar";
import { rendercacheaciveproject } from "./cache";
export let Projects = JSON.parse(localStorage.getItem("projects")) || []

export function MakeProject(event){
event.preventDefault()  
const randomID = Math.floor(Math.random() * 10)
const newProject = projectCreation(projectBuilderFormName.value,projectBuilderFormDueDate.value,projectBuilderFormDescrption.value,randomID)
projectBuilderFormName.value = ""
projectBuilderFormDueDate.value = ""
projectBuilderFormDescrption.value = ""
Projects.push(newProject)
cacheProjects()  
UnrenderProjectBuildForm()
if (Projects.length === 1) {
topHeaderButton.removeEventListener("click",renderProjectBuildForm)  
topHeaderButton.addEventListener("click",renderpickAProjectDropDown)  
}
setcacheasactiveproject(newProject)
pickAProjectHeaderText.innerText = activeProject.ProjectName
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
Projects[i] = projectCreation(project.ProjectName,project.DueDate,project.desc,project.projectID)  
i++ 
}   
rendercacheaciveproject()
}