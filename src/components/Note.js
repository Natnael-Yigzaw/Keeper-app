import React from "react";

function Notes(notes) {
  return (
    <div className="note">
      <h1>{notes.title}</h1>
      <p>{notes.content}</p>
    </div>
  );
}

export default Notes;
