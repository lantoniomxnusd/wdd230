// const list = document.querySelector('ul');
// const input = document.querySelector('input');
// const button =document.querySelector('button');

// // textBox.addEventListener ("keydown", function(event) {
// //     console.log ('you pressed "${event.key}".');
// // });


// // textBox.addEventListener("keydown", event => {
// //     console.log ('You pressed "${event.key}".');
// // });

// textBox.addEventListener("keydown", (event) =>
//     console.log(`You pressed "${event.key}".`),
//   );
  
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const myItem = input.value;
  input.value = '';

  const listItem = document.createElement('li');
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listText.textContent = myItem;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  list.appendChild(listItem);

  listBtn.addEventListener('click', () => {
    list.removeChild(listItem);
  });

  input.focus();
});