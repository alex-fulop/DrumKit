document.querySelectorAll(".keypad ").forEach((e) =>
  e.addEventListener("click", function () {
    makeSound(this.innerHTML);
    playBtnAnimation(this.innerHTML);
  })
);

document.addEventListener("keydown", function (e) {
  makeSound(e.key);
  playBtnAnimation(e.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./assets/sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./assets/sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./assets/sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./assets/sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./assets/sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./assets/sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./assets/sounds/crash.mp3");
      audio.play();
      break;
  }
}

function playBtnAnimation(currentKey) {
  var activeButton = document.querySelector("#" + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
