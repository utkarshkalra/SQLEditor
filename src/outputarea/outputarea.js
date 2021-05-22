import React from "react";
import Table from "./table";
import "../output.css";

const OutputArea = () => {
  return (
    <section className="outputArea">
      <header>
        <h4>Output area</h4>
      </header>
      <div className="tablearea">
        <Table />
      </div>
    </section>
  );
};
export default OutputArea;
