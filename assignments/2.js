// Default Data
let technicalData = JSON.parse(localStorage.getItem("skillsData")) || [
    {
        category: "Frontend Development",
        skills: ["HTML5 & CSS3", "JavaScript", "React.js"]
    },
    {
        category: "Backend Systems",
        skills: ["Node.js", "API Design", "PostgreSQL"]
    }
];

const container = document.getElementById('skillsContainer');
const addCategoryBtn = document.getElementById('addCategoryBtn');

// Save to localStorage
function saveData() {
    localStorage.setItem("skillsData", JSON.stringify(technicalData));
}

// Render UI
function render() {
    container.innerHTML = "";

    const ol = document.createElement('ol');
    ol.className = "main-categories";

    technicalData.forEach((item, index) => {

        const categoryLi = document.createElement('li');

        // Category title
        const titleSpan = document.createElement('span');
        titleSpan.textContent = item.category;

        // Buttons
        const editBtn = document.createElement('button');
        editBtn.textContent = "✏️";

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "❌";

        const addSkillBtn = document.createElement('button');
        addSkillBtn.textContent = "+ Skill";

        // Edit Category
        editBtn.onclick = () => {
            const newName = prompt("Edit category name:", item.category);
            if (newName) {
                technicalData[index].category = newName;
                saveData();
                render();
            }
        };

        // Delete Category
        deleteBtn.onclick = () => {
            if (confirm("Delete this category?")) {
                technicalData.splice(index, 1);
                saveData();
                render();
            }
        };

        // Add Skill
        addSkillBtn.onclick = () => {
            const skill = prompt("Enter new skill:");
            if (skill) {
                technicalData[index].skills.push(skill);
                saveData();
                render();
            }
        };

        // Skills list
        const skillsUl = document.createElement('ul');
        skillsUl.className = "skill-items";

        item.skills.forEach((skill, skillIndex) => {
            const skillLi = document.createElement('li');
            skillLi.textContent = skill;

            // Delete skill button
            const removeSkillBtn = document.createElement('button');
            removeSkillBtn.textContent = "❌";

            removeSkillBtn.onclick = () => {
                technicalData[index].skills.splice(skillIndex, 1);
                saveData();
                render();
            };

            skillLi.appendChild(removeSkillBtn);
            skillsUl.appendChild(skillLi);
        });

        // Append everything
        categoryLi.appendChild(titleSpan);
        categoryLi.appendChild(editBtn);
        categoryLi.appendChild(deleteBtn);
        categoryLi.appendChild(addSkillBtn);
        categoryLi.appendChild(skillsUl);

        ol.appendChild(categoryLi);
    });

    container.appendChild(ol);
}

// Add Category
addCategoryBtn.onclick = () => {
    const categoryName = prompt("Enter category name:");
    if (categoryName) {
        technicalData.push({
            category: categoryName,
            skills: []
        });
        saveData();
        render();
    }
};

// Initial render
render();
