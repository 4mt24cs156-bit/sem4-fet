const brandData = [
    { name: "Aether Tech", region: "North America", value: "$8.4B", growth: 85 },
    { name: "Vertex Global", region: "EMEA", value: "$3.2B", growth: 60 },
    { name: "Nova Soft", region: "APAC", value: "$5.7B", growth: 92 },
    { name: "Horizon", region: "South America", value: "$1.1B", growth: 42 },
    { name: "Zenith", region: "EMEA", value: "$4.9B", growth: 75 },
    { name: "Pulse AI", region: "APAC", value: "$2.5B", growth: 98 }
];

const grid = document.getElementById('brandGrid');
const searchBar = document.getElementById('searchBar');

// Function to render cards to the UI
function renderDashboard(data) {
    if (data.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">No brands found.</p>`;
        return;
    }

    grid.innerHTML = data.map(brand => `
        <article class="card">
            <div class="card-header">
                <div class="brand-name">${brand.name}</div>
                <span class="region-tag">${brand.region}</span>
            </div>
            <div class="value">${brand.value}</div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${brand.growth}%"></div>
            </div>
            <p style="font-size: 0.8rem; margin-top: 8px; color: #94a3b8;">Growth: ${brand.growth}%</p>
        </article>
    `).join('');
}

// Search Filter Logic
searchBar.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = brandData.filter(b => 
        b.name.toLowerCase().includes(term) || 
        b.region.toLowerCase().includes(term)
    );
    renderDashboard(filtered);
});

// Initial Render
renderDashboard(brandData);
