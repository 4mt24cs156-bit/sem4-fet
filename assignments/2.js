const data = [
    { category: "Frontend", skills: ["HTML", "CSS"] },
    { category: "Backend", skills: ["Node.js", "API"] }
];

const container = document.getElementById("skillsContainer");

function render() {
    container.innerHTML = "";
    const ol = document.createElement("ol");

    data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.category;

        const ul = document.createElement("ul");

        item.skills.forEach(skill => {
            const s = document.createElement("li");
            s.textContent = skill;
            ul.appendChild(s);
        });

        li.appendChild(ul);
        ol.appendChild(li);
    });

    container.appendChild(ol);
}

function addCategory() {
    const name = prompt("Category:");
    if (name) data.push({ category: name, skills: [] });
    render();
}

function addSkill() {
    const index = prompt("Category number (1,2,..):");
    const skill = prompt("Skill name:");
    if (data[index - 1] && skill) {
        data[index - 1].skills.push(skill);
    }
    render();
}

render();
