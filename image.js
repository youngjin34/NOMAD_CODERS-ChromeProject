const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `./img/${chosenImage}`;
document.body.appendChild(bgImage);

// 이미지 변경 버튼 클릭 시 실행
document
  .querySelector("#background-change button")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const newChosenImage = images[Math.floor(Math.random() * images.length)];
    bgImage.src = `./img/${newChosenImage}`;
  });
