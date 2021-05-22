import React from "react";
import { useGlobalContext } from "../context";

import "../codearea.css";

const CodeArea = () => {
  const { showData } = useGlobalContext();
  const filename = "categories";
  return (
    <section className="codeArea">
      <h1>Code area</h1>
      <button className="btn" onClick={() => showData(filename)}>
        click me
      </button>
    </section>
  );
};
export default CodeArea;
