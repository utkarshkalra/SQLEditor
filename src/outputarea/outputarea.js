import React from "react";
import Table from "./table";
import "./output.css";
import { Loading } from "../loading/loading";
import { useGlobalContext } from "../context";
import Error from "./error";

const OutputArea = () => {
  const { loading, outputTitle, error } = useGlobalContext();

  return (
    <section className="outputArea">
      <header>
        <h4 className="outputtitle">{outputTitle}</h4>
      </header>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <div className="tablearea">
          <Table />
        </div>
      )}
    </section>
  );
};
export default OutputArea;
