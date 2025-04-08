// Change text content dynamically
document.getElementById("change-text-btn").addEventListener("click", function() {
    document.getElementById("main-heading").innerText = "JavaScript is Awesome!";
    document.getElementById("paragraph").innerText = "The text content has been changed dynamically!";
});

// Modify CSS styles via JavaScript
document.getElementById("change-text-btn").addEventListener("mouseover", function() {
    document.getElementById("main-heading").classList.add("highlight");
});

document.getElementById("change-text-btn").addEventListener("mouseout", function() {
    document.getElementById("main-heading").classList.remove("highlight");
});

// Add a new element when a button is clicked
document.getElementById("add-element-btn").addEventListener("click", function() {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = "<p>This is a newly added element!</p>";
    document.getElementById("new-element-container").appendChild(newDiv);
});
