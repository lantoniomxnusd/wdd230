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

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");


modeButton.addEventListener("click", () => {
    const links = document.querySelectorAll("a"); 
    const dark = document.querySelector("h1");

	if (modeButton.textContent.includes("✨")) {
		main.style.background = "#000";
		main.style.color = "#fff";
        links.forEach(link => link.style.color = "#fff");
        dark.style.color = "#fff";
        modeButton.textContent = "🏜️";

	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
        links.forEach(link => link.style.color = "");
        dark.style.color = "";
		modeButton.textContent = "✨";
	}
});

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);

const visitsDisplay = document.querySelector(".visits");
let lastVisit= localStorage.getItem("lastVisit")
let currentVisit = new Date().getTime();

if (!lastVisit) {
    visitsDisplay.text = "Welcome! Let us know if you have any questions.";
}else {
    let timeDifference= currentVisit-Number(lastVisit);
    let daysDifference= Math.floor(timeDifference/(1000 * 60 * 60 *24));
}

if (daysDifference < 1 {
    visitsDisplay.textContent = "Back so soon! Awesome!";
}else {
    visitsDisplay.textContent = 'you last visited ${daysDifference}  ${daysDifference === 1 ? "day" : "days"} ago.';
}