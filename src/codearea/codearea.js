import React, { useState, useEffect } from "react";

import { AiOutlineHistory, AiOutlineDoubleRight } from "react-icons/ai";
import "./codearea.css";
import { useGlobalContext } from "../context";
import csvfiles from "../sidebar/csvfiles";
import History from "./history";

const getlocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else return [];
};

const allowedQueries =
  "Enter your queries here for example:\n\nselect * from filename\nshow databases\nshow tables";

const CodeArea = () => {
  const {
    setFilename,
    setOutputTitle,
    setError,
    setData,
    history,
    setHistory,
    query,
    setQuery,
  } = useGlobalContext();
  const [list, setList] = useState(getlocalStorage);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query !== "") {
      setList([...list, query]);
    }
    if (query === "SHOW DATABASES" || query === "show databases") {
      setData(["CSV_files"]);
      setOutputTitle("Output");
    } else if (query === "SHOW TABLES" || query === "show tables") {
      setData(csvfiles);
      setOutputTitle("Output");
    } else if (query.length > 14) {
      if (
        query.slice(0, 13) === "select * from" ||
        query.slice(0, 13) === "SELECT * FROM"
      ) {
        let filename = query.slice(14, query.length);
        console.log(query.slice(14, query.length));
        if (csvfiles.includes(filename)) {
          setFilename(filename);
          setOutputTitle("Output");
          setError(false);
        } else {
          setOutputTitle("Error");
          setError(true);
        }
      }
    } else {
      setOutputTitle("Error");
      setError(true);
    }
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="codeArea">
      <div className="buttondiv">
        <button
          className={history ? "btnd" : "active btnd"}
          onClick={() => setHistory(false)}
        >
          Query
        </button>
        <button
          className={history ? "btnd history active" : "btnd history"}
          onClick={() => setHistory(true)}
        >
          History
          <AiOutlineHistory />
        </button>
      </div>
      {history ? (
        <History list={list} setList={setList} />
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            name="queries"
            id="queries"
            className="querytextarea"
            placeholder={allowedQueries}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setError(false);
              setFilename("");
              setData([]);
              setOutputTitle("Output");
            }}
          ></textarea>
          <button type="submit" className="run-btn">
            Run <AiOutlineDoubleRight />
          </button>
        </form>
      )}
    </section>
  );
};
export default CodeArea;
