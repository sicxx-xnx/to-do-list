import { activeProject } from "./projectSidebar"
import {projectCreation} from "./index"
import { setcacheasactiveproject } from "./projectSidebar"
import { pickAProjectDropdownholderel, pickAProjectHeaderText,renderProjectBuildForm,renderpickAProjectDropDown, topHeaderButton } from "./DOM"
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
topHeaderButton.addEventListener("click",renderpickAProjectDropDown)
return true
} else {
topHeaderButton.addEventListener("click",renderProjectBuildForm)
return false   
}

}