const skillButton = document.getElementById('skillButton') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLDivElement;

skillButton.addEventListener('click' , ()=> {
    if (skillsSection.style.display === "none" || skillsSection.style.display ===""){
        skillsSection.style.display = "block";
        skillButton.textContent = "Hide Skills";
    }
    else {
        skillsSection.style.display = "none";
        skillButton.textContent = "show skills";
    }
})