import React from "react";
import Pianokey from "./Pianokey";
import { makeSound, animateButton } from "../feedback";
import keyboardKeyNotes from "../keyboardKeyNotes";
import { Container } from "react-bootstrap";

export default function Piano(props) {
  const [fired, setFired] = React.useState([]);

  const keyFeedback = (key) => {
    makeSound(key);
    animateButton(key, "pressed");
    props.keySelect(key);
  };

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      const pressedKey = event.key;
      const keyIndex = keyboardKeyNotes.findIndex(
        (key) => key.keyboardKey === pressedKey
      );
      if (keyIndex !== -1 && !fired.includes(pressedKey)) {
        setFired((fired) => [...fired, pressedKey]);
        keyFeedback(keyboardKeyNotes[keyIndex].note);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  React.useEffect(() => {
    const handleKeyUp = (event) => {
      setFired((fired) => fired.filter((x) => !event.key));
    };
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  });

  return (
    <div className="keyboard m-auto">
      {keyboardKeyNotes.map((key) => (
        <Pianokey
          key={key.note}
          id={key.note}
          keyboardKey={key.keyboardKey}
          keyFeedback={keyFeedback}
        />
      ))}
    </div>
  );
}
