  let input = document.querySelector("input");
console.log(input);

let ol = document.querySelector("ol");
console.log(ol);

let button = document.querySelector("button");
console.log(button);

button.addEventListener("click", click);

function click() {
  let li = document.createElement("li");
  if (input.value == "") {
    alert("Enter Value!");
    return;
  }
  li.innerHTML = `${input.value} <button onclick="Delete(this)" class="del"> Delete </button>`;
  ol.prepend(li);
  input.value = "";
}

function Delete(el) {
  el.parentElement.remove();
}

input.addEventListener("keydown", enter1);

function enter1(event) {
  let li = document.createElement("li");
  if (event.key == "Enter") {
    if (input.value == "") {
      alert("Enter Value!");
      return;
    }
    li.innerHTML = `${input.value} <button onclick="Delete(this)" class="del"> Delete </button>`;
    ol.prepend(li);
    localStorage.setItem("item", li)
    input.value = "";
  }
}