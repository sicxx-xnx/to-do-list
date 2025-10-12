import { MakeProject } from "./PickAProject"

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



function renderProjectBuildForm(){
projectformholder.classList.replace("hidden","flex")  
closeProjectBuilderForm.addEventListener("click",UnrenderProjectBuildForm)  
}
function UnrenderProjectBuildForm(){
projectformholder.classList.replace("flex","hidden")     
}

export { pickAProjectHeaderText,projectBuilderForm,projectBuilderFormName,projectBuilderFormDueDate,projectBuilderFormDescrption,projectformholder,renderProjectBuildForm,sidebarCreatAProjectButton,sidebar }