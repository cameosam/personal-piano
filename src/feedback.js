function makeSound(key) {
  const audio = new Audio("sounds/" + key + ".mp3");
  audio.play();
}

function animateButton(key, classAdd) {
  const activeButton = document.querySelector("#" + key);
  activeButton.classList.add(classAdd);
  setTimeout(() => activeButton.classList.remove(classAdd), 100);
}

function highlightButton(key) {
  const activeButton = document.querySelector("#" + key);
  activeButton.classList.add("next-key");
  return activeButton;
}

function resetButton(activeButton) {
  activeButton.classList.remove("next-key");
}

function unfocus(event) {
  event.preventDefault();
  event.target.blur();
}

export { makeSound, animateButton, highlightButton, resetButton, unfocus };
