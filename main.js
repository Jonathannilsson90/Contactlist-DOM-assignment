let inputName = document.getElementById("namn-input");
let inputPhone = document.getElementById("tlf-input");
let btn = document.getElementById("create-Btn");
let ul = document.getElementById("ul-list");
let removeBtn = document.getElementById("removeAll");
let li = document.createElement("li");

btn.addEventListener("click", function () {

  let name = inputName.value;
  let phone = inputPhone.value;

  let li = document.createElement("li");
  let nameList = document.createElement("input");
  let phoneList = document.createElement("input");
  let modify = document.createElement("button");
  let remove = document.createElement("button");

  nameList.setAttribute("disabled", "");
  phoneList.setAttribute("disabled", "");

  modify.innerHTML = "Ändra";
  remove.innerHTML = "Radera";

  nameList.value = inputName.value;
  phoneList.value = inputPhone.value;

  li.append(nameList, phoneList, modify, remove);
  ul.append(li);
/// MODIFY BUTTON CLICK FUNCTION
  modify.addEventListener("click", function () {
    let selectedParentElement = this.parentNode;
    console.log(selectedParentElement);
    if (nameList.disabled && phoneList.disabled) {
      nameList.removeAttribute("disabled", "");
      phoneList.removeAttribute("disabled", "");
    } else {
      nameList.setAttribute("disabled", "");
      phoneList.setAttribute("disabled", "");
    }
  });
  remove.addEventListener("click", function () {
    let selectedParentElement = this.parentNode;
    selectedParentElement.remove();
  });
});

///CLEAR INPUT FIELDS FROM TEXT

let createButton = document.getElementById("create-Btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();

  let nameFieldInput = document.getElementById("namn-input");
  nameFieldInput.value = "";

  let phoneFieldInput = document.getElementById("tlf-input");
  phoneFieldInput.value = "";
});

/// REMOVE ENTIRE LIST

removeBtn.addEventListener("click", function () {
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
});

