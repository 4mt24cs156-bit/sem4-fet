let roles = [
    "Aspiring Full Stack Developer",
    "Frontend Developer",
    "JavaScript Enthusiast",
    "Future Software Engineer"
];

let index = 0;

/* function changeRole() {
    index = (index + 1) % roles.length;
    document.getElementById("role").textContent = roles[index];
} */function changeRole() {
    const roleElement = document.getElementById("role");

    // Get current role from the page
    const currentRole = roleElement.textContent;

    // Use current role as default in prompt
    let newRole = prompt("What is your new professional role?", currentRole);

    if (newRole && newRole.trim() !== "") {
        roleElement.textContent = newRole.trim();
        alert("Role updated successfully to: " + newRole);
    } else {
        alert("No changes were made.");
    }
}

/*function changeRole() {
    // 1. Ask the user for their new role using a prompt
    let newRole = prompt("What is your new professional role?", "Full Stack Developer");

    // 2. Check if the user entered something (and didn't hit cancel)
    if (newRole !== null && newRole !== "") {
        
        // 3. Update the HTML element with the id 'role'
        document.getElementById("role").innerText = newRole;

        // 4. Show a success message using an alert
        alert("Role updated successfully to: " + newRole);
    } else {
        alert("No changes were made.");
    }
}*/
// script.js

// 1. Select the search input and all the project cards
const searchInput = document.getElementById('project-search');
const cards = document.querySelectorAll('.card');

// 2. Add an "Event Listener" to detect typing
searchInput.addEventListener('keyup', function(event) {
    const searchTerm = event.target.value.toLowerCase();

    cards.forEach(card => {
        // Get the title text from the h3 inside the card
        const projectTitle = card.querySelector('h3').textContent.toLowerCase();

        // 3. Logic: If the title includes the search term, show it; otherwise, hide it
        if (projectTitle.includes(searchTerm)) {
            card.style.display = "block"; // Show
        } else {
            card.style.display = "none";  // Hide
        }
    });
});
