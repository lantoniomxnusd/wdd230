const directory = document.getElementById('directory');
const gridBtn = document.getElementById('grid');
const listBtn = document.getElementById('list');

async function getMemberData() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        console.error('Error loading member data:', error);
    }
}

function displayMembers(members) {
    cards.innerHTML = ''; // Clear existing content
    
    members.forEach((member) => {
        const card = document.createElement('section');
        directory.innerHTML = `
            <h2>${member.name}</h2>
            <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
            <p class="address">${member.address}</p>
            <p class="phone">${member.phone}</p>
            <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
            <p class="membership">${member.membershipLevel} Member</p>
            ${member.additionalInfo ? `<p class="additional">${member.additionalInfo}</p>` : ''}
        `;
        cards.appendChild(card);
    });
}

// View toggle functionality
gridBtn.addEventListener('click', () => {
    cards.classList.replace('list', 'grid');
});

listBtn.addEventListener('click', () => {
    cards.classList.replace('grid', 'list');
});

// Initial load
getMemberData();