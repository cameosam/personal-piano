import React from "react";
import { unfocus } from "../feedback";

export default function Pianokey(props) {
  return (
    <div className={props.id.length === 3 ? "black-key" : "white-key"}>
      <button
        onClick={(event) => props.keyFeedback(event.target.id)}
        className={
          props.id.length === 3
            ? "keyboard-key btn btn-dark"
            : "keyboard-key btn btn-light"
        }
        id={props.id}
        onKeyDown={unfocus}
      >
        {props.keyboardKey}
      </button>
      <label className="piano-note">
        {props.id.length === 3 ? "" : props.id}
      </label>
    </div>
  );
}
