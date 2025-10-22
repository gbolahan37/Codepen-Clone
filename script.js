let sidebarToggle = document.querySelectorAll(".sidebar-toggle")
let sidebarDetails = document.querySelectorAll(".sidebar-details")
let sidebarImage = document.querySelectorAll(".side-img")


function displayContent (index){
    sidebarDetails.forEach(detail => detail.classList.remove("active"))
    sidebarDetails[index].classList.add("active") 
    sidebarImage.forEach(asset => asset.classList.remove("move"))
    sidebarImage[index].classList.add("move")
    
}

for (let i = 0; i <= 5; i++){
    sidebarToggle[i].addEventListener("click", () => displayContent(i))
}

