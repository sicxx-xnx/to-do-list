import { MakeProject } from "./PickAProject"
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



function renderProjectBuildForm(){
projectformholder.classList.replace("hidden","flex")  
closeProjectBuilderForm.addEventListener("click",UnrenderProjectBuildForm)  
}
function UnrenderProjectBuildForm(){
projectformholder.classList.replace("flex","hidden")     
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

export { pickAProjectHeaderText,projectBuilderForm,projectBuilderFormName,projectBuilderFormDueDate,projectBuilderFormDescrption,projectformholder,renderProjectBuildForm,sidebarCreatAProjectButton,sidebar,UnrenderProjectBuildForm,pickAProjectDropdownholderel,renderpickAProjectDropDown,topHeaderButton }