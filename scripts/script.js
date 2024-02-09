// loading state
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        hideLoading(); 
    }, 1000); 
});

// na de timer, content laten zien
function hideLoading() {
    var loadingContainer = document.getElementById("loadingContainer");
    var content = document.querySelector("main");

    loadingContainer.style.display = "none";
    content.style.display = "block";
}