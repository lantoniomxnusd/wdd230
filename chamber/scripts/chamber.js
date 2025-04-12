const today = document.querySelector("#lastModified"); 
const options = {
    day: "numeric",
    month: "short",
    year: "numeric",
};

today.innerHTML = "Last modified: " + new Date().toLocaleDateString("en-US", options);

const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
})


const chamVisits = document.querySelector(".chamVisits");
let lastVisit = localStorage.getItem("chamLastVisit"); 
let currentVisit = new Date().getTime();

if (!lastVisit) {
    chamVisits.textContent = "Welcome! Let us know if you have any questions"; 
} else {
    let timeDifference = currentVisit - Number(lastVisit);
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 1) {
        chamVisits.textContent = "Back so soon! Awesome!";
    } else {
        chamVisits.textContent = `You last visited ${daysDifference} ${daysDifference === 1 ? "day" : "days"} ago.`;
    }
}

localStorage.setItem("chamLastVisit", currentVisit.toString());

const form = document.querySelector('.form');
const timestampField = document.getElementById('formTimestamp');

form.addEventListener('submit', function () {
    const now = new Date();
    timestampField.value = now.toISOString(); // ISO format: e.g. 2025-04-11T16:20:30.000Z
});
