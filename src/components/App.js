import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notess from "../notes";

function App() {
  return (
    <div>
      <Header />
      {Notess.map((note) => (
        <Note title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
