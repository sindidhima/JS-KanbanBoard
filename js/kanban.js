const { ifStatement } = require("jscodeshift");

let order = 1;
let adding = false;

const error = document.querySelector('.error');
const message = 'Please add a description.';

const add_btn = document.querySelector('.add');
add_btn.addEventListener('click', () => {
  const target = document.querySelector('#requested');
  if (adding == false) {
    adding = true;
    target.appendChild(create_item());
  } else {
    error.innerHTML = message;
  }
});

const create_item = () => {
  let item = document.createElement("div");
  item.classList.add("item");
  item.setAttribute("id", "item-order");
  item.draggable = true;
  item.addEventListener('dragstart', (event) => {
    return event.target = event.DataTransfer.setData('text');
  });
  item.addEventListener('dragstart', (event) => {
    return event.DataTransfer.clearData();
  });

  let input = document.createElement("input");
  item.append(input);
  let save_btn = document.createElement("button");
  save_btn.innerHTML = "Save";
  save_btn.addEventListener("click", () => {
    error.innerHTML = "";
    if(!input.value === ""){
      order = order + 1;
      item.innerHTML = input.value;
      adding = false;
    }
    else {
      error.innerHTML = message;
      item.append(save_btn);
    }
  });

  return item;
};

document.querySelectorAll('.drop').forEach(element => {
  element.addEventListener("drop", (event) => {
    event.preventDefault();
    const id = event.DataTransfer.getData('text');
    event.target = document.getElementById('id');
  });

  element.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
});
