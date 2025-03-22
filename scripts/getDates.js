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