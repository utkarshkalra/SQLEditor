import React from "react";
import { useGlobalContext } from "../context";

const OutputArea = () => {
  const { data } = useGlobalContext();

  return (
    <section className="outputArea">
      <header>
        <h4>Output area</h4>
      </header>
    </section>
  );
};
export default OutputArea;
