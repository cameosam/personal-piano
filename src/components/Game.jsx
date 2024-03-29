import React from "react";
import Piano from "./Piano";
import keyboardKeyNotes from "../keyboardKeyNotes";
import { makeSound, animateButton } from "../feedback";

export default function Game(props) {
  const [gamePattern, setGamePattern] = React.useState([]);
  const [, setInputPattern] = React.useState([]);
  const [level, setLevel] = React.useState(0);
  const [gameInstuctions, setGameInstuctions] = React.useState(
    "repeat the pattern - press any key to start!"
  );
  const [highScore, sethighScore] = React.useState(0);

  // response to key press
  function keySelect(key) {
    if (level === 0) {
      setTimeout(() => nextSequence(), 1500);
    } else {
      setInputPattern((currPattern) => [...currPattern, key]);
      setInputPattern((state) => {
        checkAnswer(state);
        return state;
      });
    }
  }

  function nextSequence() {
    setLevel(level + 1);
    level > highScore && sethighScore(level);
    setGameInstuctions("level: " + level);
    const randomNumber = Math.floor(Math.random() * keyboardKeyNotes.length);
    const randomKey = keyboardKeyNotes[randomNumber].note;
    setGamePattern((currPattern) => [...currPattern, randomKey]);
    [...gamePattern, randomKey].forEach((key, i) => {
      setTimeout(() => {
        animateButton(key, "next-key");
        makeSound(key);
      }, i * 1000);
    });
  }

  function checkAnswer(pattern) {
    const currentLevel = pattern.length - 1;
    if (gamePattern[currentLevel] === pattern[currentLevel]) {
      if (gamePattern.length === pattern.length) {
        setTimeout(function () {
          nextSequence();
          setInputPattern([]);
        }, 1000);
      }
    } else {
      const wrongSound1 = new Audio("sounds/A3.mp3");
      const wrongSound2 = new Audio("sounds/A-3.mp3");
      wrongSound1.play();
      wrongSound2.play();
      keyboardKeyNotes.forEach((key) => animateButton(key.note, "game-over"));
      setTimeout(function () {
        setGameInstuctions("game over! press any key to restart");
        level - 1 > highScore && sethighScore(level - 1);
        startOver();
      }, 500);
    }
  }

  function startOver() {
    setGamePattern([]);
    setInputPattern([]);
    setLevel(0);
  }

  return (
    <div>
      <h1>game</h1>
      <h2>{gameInstuctions}</h2>
      <Piano keySelect={keySelect} />
      <p className="game-text">high score: {highScore}</p>
    </div>
  );
}
