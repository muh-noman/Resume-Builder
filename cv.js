var skillButton = document.getElementById('skillButton');
var skillsSection = document.getElementById('skills');
skillButton.addEventListener('click', function () {
    if (skillsSection.style.display === "none" || skillsSection.style.display === "") {
        skillsSection.style.display = "block";
        skillButton.textContent = "Hide Skills";
    }
    else {
        skillsSection.style.display = "none";
        skillButton.textContent = "show skills";
    }
});
