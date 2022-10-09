const clock = document.querySelector("#clock");
const textColor = document.getElementsByClassName("text");

const textColors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

function getClock() {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `
  오늘은 ${month}월 ${day}일입니다.
  ${hour}:${minute}:${seconds}`;
}

function changeTextColor() {
  const text = textColors[Math.floor(Math.random() * textColors.length)];
  clock.style.color = `${text}`;
}

getClock();
setInterval(getClock, 1000);

clock.addEventListener("mouseenter", changeTextColor);