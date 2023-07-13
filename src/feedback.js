function makeSound(key) {
  const audio = new Audio("sounds/" + key + ".mp3");
  audio.play();
}

function animateButton(key, classAdd) {
  const activeButton = document.querySelector("#" + key);
  activeButton.classList.add(classAdd);
  setTimeout(() => activeButton.classList.remove(classAdd), 100);
}

export { makeSound, animateButton };
