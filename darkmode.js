const change = document.querySelector("#change");
const body = document.querySelector("body");
let isNightMode = false;

function changeHandle() {
  if (isNightMode) {
    body.classList.remove("night");
    body.classList.add("day");
    change.value = "night";
    isNightMode = false;
  } else {
    body.classList.add("night");
    body.classList.remove("day");
    change.value = "day";
    isNightMode = true;
  }
}

change.addEventListener("click", changeHandle);
