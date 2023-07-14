import React from "react";
import Piano from "./Piano";

export default function Freeplay(props) {
  return (
    <div>
      <h1 className="pb-5 mb-5">freeplay</h1>
      <Piano keySelect={() => {}} />
    </div>
  );
}
