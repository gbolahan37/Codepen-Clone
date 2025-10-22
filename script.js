let sidebarToggle = document.querySelectorAll(".sidebar-toggle")
let sidebarDetails = document.querySelectorAll(".sidebar-details")
let sidebarImage = document.querySelector("#side-img")

let sideImages = [
    {
        image: "img/Screenshot 2025-10-20 142639.png",
    },
    {
        image: "img/Screenshot 2025-10-19 212358.png",
    },
    {
        image: "img/Screenshot 2025-10-20 140918.png",
    },
    {
        image: "img/Screenshot 2025-10-20 140932.png",
    },
    {
        image: "img/Screenshot 2025-10-20 140947.png",
    },
    {
        image: "img/Screenshot 2025-10-20 141010.png",
    },
]

function displayContent (index){
    sidebarDetails.forEach(detail => detail.classList.remove("active"));
    sidebarDetails[index].classList.add("active")
    sidebarImage.setAttribute("src", sideImages[index].image) 
    
}

for (let i = 0; i <= 5; i++){
    sidebarToggle[i].addEventListener("click", () => displayContent(i))
}

