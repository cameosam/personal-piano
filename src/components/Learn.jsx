import React from "react";
import Piano from "./Piano";
import { Button } from "react-bootstrap";
import songs from "../songs";
import { highlightButton, resetButton, unfocus } from "../feedback";

export default function Learn(props) {
  const [songNumber, setSongNumber] = React.useState(0);
  const [noteNumber, setNoteNumber] = React.useState(0);
  const [nextNoteHighlight, setNextNoteHighlight] = React.useState(-1);
  const [subtitleLearn, setSubtitleLearn] = React.useState(
    "play the highlighted notes - press any key to start!"
  );

  // response to key press
  function keySelect(key) {
    if (nextNoteHighlight == -1) {
      setNextNoteHighlight(highlightButton(songs[songNumber].value[0]));
      setSubtitleLearn(
        <p>
          <strong className="selected"> {songs[songNumber].value[0]} </strong>
          {songs[songNumber].value.slice(1).join(" ")}
        </p>
      );
    } else {
      if (key === songs[songNumber].value[noteNumber]) {
        resetButton(nextNoteHighlight);

        setNoteNumber(noteNumber + 1);
        // check if next note in song exists
        if (songs[songNumber].value[noteNumber + 1]) {
          setSubtitleLearn(
            <p>
              {songs[songNumber].value.slice(0, noteNumber + 1).join(" ")}{" "}
              <strong className="selected">
                {songs[songNumber].value[noteNumber + 1]}{" "}
              </strong>
              {songs[songNumber].value.slice(noteNumber + 2).join(" ")}
            </p>
          );
          setNextNoteHighlight(
            highlightButton(songs[songNumber].value[noteNumber + 1])
          );
        } else {
          setNoteNumber(0);
          setNextNoteHighlight(highlightButton(songs[songNumber].value[0]));
          setSubtitleLearn(
            <p>
              <strong className="selected">
                {" "}
                {songs[songNumber].value[0]}{" "}
              </strong>
              {songs[songNumber].value.slice(1).join(" ")}
            </p>
          );
        }
      }
    }
  }

  return (
    <div>
      <h1>learn "{songs[songNumber].name}"</h1>
      <h2 className="mx-5 px-5">{subtitleLearn}</h2>
      <Piano keySelect={keySelect} />
      {songs.map((song, index) => (
        <Button
          key={index}
          type="radio"
          value={index}
          className={songNumber == index ? "selected songs" : "songs"}
          onKeyDown={unfocus}
          onClick={(e) => {
            setNoteNumber(0);
            setSongNumber(e.currentTarget.value);
            setSubtitleLearn(
              <p>
                <strong className="selected">
                  {" "}
                  {songs[e.currentTarget.value].value[0]}{" "}
                </strong>
                {songs[e.currentTarget.value].value.slice(1).join(" ")}
              </p>
            );
            if (nextNoteHighlight != -1) {
              resetButton(nextNoteHighlight);
            }
            setNextNoteHighlight(
              highlightButton(songs[e.currentTarget.value].value[0])
            );
          }}
        >
          {song.name}
        </Button>
      ))}
    </div>
  );
}
