const btn = document.querySelector("#btn");
const leftDiv = document.querySelector(".left");
const rightDiv = document.querySelector(".right");
const card__container = document.querySelector(".card__container");

const cards = [
  {
    id: 1,
    name: "Rajashri",
    email: "sample.com",
    score: 90,
    marks: [90, 43, 4, 34, , 34, 34, 34],
  },
  {
    id: 2,
    name: "Nisha",
    email: "sample.com",
    score: 80,
    marks: [90, 43, 4, 34, , 34, 34, 34],
  },
  {
    id: 3,
    name: "Nayana",
    email: "sample.com",
    score: 20,
    marks: [90, 43, 4, 34, , 34, 34, 34],
  },
];
btn.addEventListener("click", () => {});

cards.map((card) => {
  let box = document.createElement("div");
  box.classList.add("card");
  box.innerHTML = `  

        <h3> ${card.name} </h3>
        <p> ${card.email} </p>
        <p>${card.score}</p> 
`;

  card__container.appendChild(box);
});

const add = document.querySelector(".num__container");
const num = [
  {
    id: 1,
    name: "red",
    value: "color type",
    value1: "test1",
  },
  {
    id: 2,
    name: "yellow",
    value: "color type1",
    value1: "test2",
  },
  {
    id: 3,
    name: "green",
    value: "color type3",
    value1: "test3",
  },
];
num.map(({ id, name, value, value1 }) => {
  let div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
            <h3>${name}</h3>
        <p>${value}</p>
        <p>${value1}</p>`;
  add.appendChild(div);
});
