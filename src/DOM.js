import { MakeProject } from "./PickAProject"

const pickAProjectHeaderText = document.querySelector(".pickAProjectText")
const projectBuilderForm = document.querySelector("#ProjectBuilder")
projectBuilderForm.addEventListener("submit",MakeProject)
const projectBuilderFormName = document.querySelector("#ProjectBuilder > #Name")
const projectBuilderFormDueDate = document.querySelector("#ProjectBuilder > #dueDate")
const projectBuilderFormDescrption = document.querySelector("#ProjectBuilder > #projectDescription")
export { pickAProjectHeaderText,projectBuilderForm,projectBuilderFormName,projectBuilderFormDueDate,projectBuilderFormDescrption }