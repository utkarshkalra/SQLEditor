import React from "react";
import { useGlobalContext } from "../context";

import "../codearea.css";

const CodeArea = () => {
  const { setFilename, setOutputTitle } = useGlobalContext();
  const filename = "categories";
  return (
    <section className="codeArea">
      <h1>Code area</h1>
      <button
        className="btn"
        onClick={() => {
          setFilename(filename);
          setOutputTitle("Output");
        }}
      >
        click me
      </button>
    </section>
  );
};
export default CodeArea;
