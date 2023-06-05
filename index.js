const toggleBtn = document.querySelector(".nav-toggle");
const linksEl = document.querySelector(".links");

toggleBtn.addEventListener("click",()=>{
    linksEl.classList.toggle("show-links");
})