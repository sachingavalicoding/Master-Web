const add = document.querySelector(".addtodo");
const list = document.querySelector("ul");
const input = document.querySelector("input");
add.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerText = input.value;
  li.innerHTML = ` ${input.value} <button class ="remove " > Remove  </button>
  <button class ="edit" > edit </button> `;
  list.appendChild(li);

  // remove

  let remove = li.querySelector(".remove").addEventListener("click", () => {
    list.removeChild(li);
  });
});

// const todos = [
//   {
//     id: 0,
//     content: "Hello JI",
//     completed: true,
//     edit: false,
//   },
//   {
//     id: 1,
//     content: "Nah JI",
//     completed: true,
//     edit: false,
//   },
// ];

// todos.map((todo) => {
//   let li = document.createElement("li");
//   li.innerHTML = ` ${todo.content} `;
//   list.appendChild(li);
// });

// list.addEventListener("click", () => {
//   let li = document.createElement("li");
// });
