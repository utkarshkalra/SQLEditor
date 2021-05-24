import React from "react";
import { BiError } from "react-icons/bi";
import "./output.css";
import { useGlobalContext } from "../context";
const Error = () => {
  const { query } = useGlobalContext();
  return (
    <div className="error">
      <BiError />
      <div>
        {
          <p>
            Couldn't Show result for "
            <span className="query">
              {query === "" ? "empty query" : `entered query ${query}`}
            </span>
            " Here's a list of queries that you can run -
          </p>
        }
        <ul>
          <li>select * from filename</li>
          <li>show databases</li>
          <li>show tables</li>
        </ul>
        <p className="caution">
          *Please note that the queries are Case Sensitive and Extra Spaces can
          also cause this error.
        </p>
      </div>
    </div>
  );
};

export default Error;
