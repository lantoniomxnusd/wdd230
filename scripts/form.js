const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const fb = document.querySelector("#feedback");

password2.addEventListener('focusout',controlar);




function controlar () {
    console.log('inside the function') 
    if (password1.value !== password2.value) {
        console.log ('no match') 
        password1.value=""
        password2.value=""
        password1.focus()
        fb.textContent = "Passwords don't match"
    } else {
        console.log ('YEA the match') 
        fb.textContent =""
    }
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}