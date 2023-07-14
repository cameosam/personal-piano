import React from "react";
import Piano from "./Piano";
import { Button, ButtonGroup } from "react-bootstrap";
import songs from "../songs";
import { animateButton } from "../feedback";

export default function Learn(props) {
  const [songNumber, setSongNumber] = React.useState(0);
  const [noteNumber, setNoteNumber] = React.useState(0);
  const [subtitleLearn, setSubtitleLearn] = React.useState(
    "press " + songs[songNumber].value[noteNumber] + " to start!"
  );

  // response to key press
  function keySelect(key) {
    if (key === songs[songNumber].value[noteNumber]) {
      setNoteNumber(noteNumber + 1);
      // check if next note in song exists
      if (songs[songNumber].value[noteNumber + 1]) {
        setSubtitleLearn(
          "next key: " +
            songs[songNumber].value[noteNumber + 1] +
            " (note: " +
            (noteNumber + 2) +
            ")"
        );
        setTimeout(function () {
          animateButton(songs[songNumber].value[noteNumber + 1], "next-key");
        }, 300);
      } else {
        setNoteNumber(0);
        setSubtitleLearn(
          "nice job! press " + songs[songNumber].value[0] + " to restart"
        );
      }
    }
  }

  return (
    <div>
      <h1>learn "{songs[songNumber].name}"</h1>
      <h2>{subtitleLearn}</h2>
      <Piano keySelect={keySelect} />
      <ButtonGroup name="songs">
        {songs.map((song, index) => (
          <Button
            key={index}
            type="radio"
            variant="white"
            value={index}
            checked={songNumber === index}
            onClick={(e) => {
              setNoteNumber(0);
              setSongNumber(e.currentTarget.value);
              setSubtitleLearn(
                "press " + songs[e.currentTarget.value].value[0] + " to start!"
              );
            }}
          >
            {song.name}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}
