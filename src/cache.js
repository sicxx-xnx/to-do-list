import { activeProject } from "./projectSidebar"
import {projectCreation} from "./index"
import { setcacheasactiveproject } from "./projectSidebar"
import { pickAProjectDropdownholderel, pickAProjectHeaderText,renderProjectBuildForm,renderpickAProjectDropDown, topHeaderButton } from "./DOM"
export function cacheactiveproject() {
const stringactiveproject = JSON.stringify(activeProject) 
 
localStorage.setItem("activeproject",stringactiveproject)
}

export function rendercacheaciveproject (){
const raw = localStorage.getItem("activeproject")     
if (raw && raw!== "undefined") {
const holdingproject = JSON.parse(localStorage.getItem("activeproject"))
const secondingporject = projectCreation(holdingproject.ProjectName,holdingproject.DueDate,holdingproject.desc,holdingproject.projectID,holdingproject.Tasks) 
setcacheasactiveproject(secondingporject)    
pickAProjectHeaderText.innerText = activeProject.getName()
topHeaderButton.addEventListener("click",renderpickAProjectDropDown)
return true
} else {
topHeaderButton.addEventListener("click",renderProjectBuildForm)
return false   
}

}