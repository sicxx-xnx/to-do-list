import { activeProject } from "./projectSidebar"
import {projectCreation} from "./index"
import { setcacheasactiveproject } from "./projectSidebar"
import { pickAProjectHeaderText,renderProjectBuildForm } from "./DOM"
export function cacheactiveproject() {
const stringactiveproject = JSON.stringify(activeProject) 
 
localStorage.setItem("activeproject",stringactiveproject)
}

export function rendercacheaciveproject (){
if (localStorage.getItem("activeproject")) {
const holdingproject = JSON.parse(localStorage.getItem("activeproject"))
const secondingporject = projectCreation(holdingproject.ProjectName,holdingproject.DueDate,holdingproject.desc,holdingproject.projectID) 
setcacheasactiveproject(secondingporject)    
pickAProjectHeaderText.innerText = activeProject.getName()

return true
} else {
pickAProjectHeaderText.addEventListener("click",renderProjectBuildForm)
return false   
}

}