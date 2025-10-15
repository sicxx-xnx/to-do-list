import { Projects, setProjects } from "./PickAProject";
import { sidebar, pickAProjectHeaderText,sidebarprojectholder,topHeaderButton, renderProjectBuildForm,renderpickAProjectDropDown, unrenderpickaprojectdropdown, } from "./DOM";
import { cacheactiveproject } from "./cache";
import { cacheProjects } from "./PickAProject";
import { injectTaskstoDom } from "./taskCreation";

// Function that injects the projects from dom load, not from creation of a new project
export function injectProjectsIntoSidebar() {
if (localStorage.getItem("projects")) {
let i = 0    
for (const project of Projects) {   
const projectholder = document.createElement("div")
projectholder.setAttribute("id",project.projectID)
const firstholdingdiv = document.createElement("div")
const seconddivtoholdinfo = document.createElement("div")    
const projectName = document.createElement("h2")
projectName.innerText = project.ProjectName 

const duedate = document.createElement("p")
duedate.innerText = project.DueDate

const projectdesc = document.createElement("p")
projectdesc.innerText = project.desc
firstholdingdiv.append(projectName)
seconddivtoholdinfo.append(duedate,projectdesc)

projectholder.append(firstholdingdiv,seconddivtoholdinfo)
projectholder.addEventListener("click",setactiveProject)
sidebarprojectholder.appendChild(projectholder)
}    
} 
}


// function that injects new project into sidebar at project creation

export function injectProjectIntoSidebarAtTimeOfCreation(project) {
const projectholder = document.createElement("div")
projectholder.setAttribute("id",project.projectID)
const firstholdingdiv = document.createElement("div")
const seconddivtoholdinfo = document.createElement("div")    
const projectName = document.createElement("h2")
projectName.innerText = project.ProjectName 

const duedate = document.createElement("p")
duedate.innerText = project.DueDate

const projectdesc = document.createElement("p")
projectdesc.innerText = project.desc
firstholdingdiv.append(projectName)
seconddivtoholdinfo.append(duedate,projectdesc)

projectholder.append(firstholdingdiv,seconddivtoholdinfo)
projectholder.addEventListener("click",setactiveProject)
sidebarprojectholder.appendChild(projectholder)    
}

export let activeProject;

function setactiveProject (e){
activeProject  = Projects.find(p=>p.projectID.toString() === e.currentTarget.id.toString())
console.log(e.currentTarget.id)
console.log(activeProject)
cacheactiveproject()
pickAProjectHeaderText.innerText = activeProject.ProjectName
injectTaskstoDom()
return activeProject
}

export function setcacheasactiveproject (project) {
activeProject = project    
}


export function removeproject (e){
e.stopPropagation()    
let holder = Projects.filter(p=>p.projectID.toString() !== activeProject.projectID.toString()) 
setProjects(holder)
cacheProjects()  
setcacheasactiveproject(Projects[0]) 
cacheactiveproject()
let raw = localStorage.getItem("activeproject")
if (raw && raw !== "undefined") {
pickAProjectHeaderText.innerText = activeProject.ProjectName    
} else {
pickAProjectHeaderText.innerText = "Creat New Project"  
unrenderpickaprojectdropdown() 
topHeaderButton.removeEventListener("click",renderpickAProjectDropDown)
topHeaderButton.removeEventListener("click",unrenderpickaprojectdropdown)
topHeaderButton.addEventListener("click",renderProjectBuildForm)   
}
sidebarprojectholder.innerHTML = ""
for (const project of Projects) {   
const projectholder = document.createElement("div")
projectholder.setAttribute("id",project.projectID)
const firstholdingdiv = document.createElement("div")
const seconddivtoholdinfo = document.createElement("div")    
const projectName = document.createElement("h2")
projectName.innerText = project.ProjectName 

const duedate = document.createElement("p")
duedate.innerText = project.DueDate

const projectdesc = document.createElement("p")
projectdesc.innerText = project.desc
firstholdingdiv.append(projectName)
seconddivtoholdinfo.append(duedate,projectdesc)

projectholder.append(firstholdingdiv,seconddivtoholdinfo)
projectholder.addEventListener("click",setactiveProject)
sidebarprojectholder.appendChild(projectholder)

}}