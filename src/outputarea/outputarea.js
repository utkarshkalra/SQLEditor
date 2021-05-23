import React from "react";
import Table from "./table";
import "../output.css";
import { Loading } from "../loading";
import { useGlobalContext } from "../context";

const OutputArea = () => {
  const { loading, outputTitle } = useGlobalContext();

  return (
    <section className="outputArea">
      <header>
        <h4>{outputTitle}</h4>
      </header>
      {loading ? (
        <Loading />
      ) : (
        <div className="tablearea">
          <Table />
        </div>
      )}
    </section>
  );
};
export default OutputArea;
