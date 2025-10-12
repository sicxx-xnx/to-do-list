import { Projects } from "./PickAProject";
import { sidebar } from "./DOM";
export function injectProjectsIntoSidebar() {
if (localStorage.getItem("projects")) {
let i = 0    
for (const project of Projects) {
const projectholder = document.createElement("div")
const seconddivtoholdinfo = document.createElement("div")    
const projectName = document.createElement("h2")
projectName.innerText = project.ProjectName 

const duedate = document.createElement("p")
duedate.innerText = project.DueDate

const projectdesc = document.createElement("p")
projectdesc.innerText = project.desc

seconddivtoholdinfo.append(duedate,projectdesc)
projectholder.append(projectName,seconddivtoholdinfo)
sidebar.appendChild(projectholder)
}    
} 
}

let activeProject;

function setactiveProject (e){
let activeProject  = Projects.find(p=>p.projectID === e.target.id)
console.log(activeProject)
return activeProject
}