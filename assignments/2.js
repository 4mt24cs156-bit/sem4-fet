const skills = ["HTML", "CSS", "JS", "UI Design"];

const team = [
    { name: "Alex Johnson", scores: [5, 4, 3, 2] },
    { name: "Maria Garcia", scores: [3, 5, 5, 4] },
    { name: "Sam Lee", scores: [2, 3, 2, 5] }
];

// 1. Fill Header
const headerRow = document.getElementById('headerRow');
skills.forEach(skill => {
    headerRow.innerHTML += `<th>${skill}</th>`;
});

// 2. Fill Body
const matrixBody = document.getElementById('matrixBody');
matrixBody.innerHTML = team.map(member => `
    <tr>
        <td style="text-align: left; font-weight: 500;">${member.name}</td>
        ${member.scores.map(score => `
            <td><span class="level lv-${score}">${score}</span></td>
        `).join('')}
    </tr>
`).join('');
