import React from "react";
import { useGlobalContext } from "../context";

import "../codearea.css";

const CodeArea = () => {
  const { showData } = useGlobalContext();
  return (
    <section className="codeArea">
      <h1>Code area</h1>
      <button className="btn" onClick={() => showData()}>
        click me
      </button>
    </section>
  );
};
export default CodeArea;
