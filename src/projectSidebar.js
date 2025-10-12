import { Projects } from "./PickAProject";
import { sidebar, pickAProjectHeaderText } from "./DOM";
import { cacheactiveproject } from "./cache";
export function injectProjectsIntoSidebar() {
if (localStorage.getItem("projects")) {
let i = 0    
for (const project of Projects) {
const projectholder = document.createElement("div")
projectholder.setAttribute("id",project.projectID)
const seconddivtoholdinfo = document.createElement("div")    
const projectName = document.createElement("h2")
projectName.innerText = project.ProjectName 

const duedate = document.createElement("p")
duedate.innerText = project.DueDate

const projectdesc = document.createElement("p")
projectdesc.innerText = project.desc

seconddivtoholdinfo.append(duedate,projectdesc)
projectholder.append(projectName,seconddivtoholdinfo)
projectholder.addEventListener("click",setactiveProject)
sidebar.appendChild(projectholder)
}    
} 
}

export let activeProject;

function setactiveProject (e){
activeProject  = Projects.find(p=>p.projectID.toString() === e.currentTarget.id.toString())
console.log(e.currentTarget.id)
console.log(activeProject)
cacheactiveproject()
pickAProjectHeaderText.innerText = activeProject.ProjectName
return activeProject
}

export function setcacheasactiveproject (project) {
activeProject = project    
}