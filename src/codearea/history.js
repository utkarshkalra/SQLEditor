import React from "react";
import "./codearea.css";
import { AiOutlineDelete } from "react-icons/ai";
const History = (props) => {
  const { list, setList } = props;
  return (
    <div className="history">
      <ul>
        {list.map((query, index) => {
          return (
            <li key={index}>
              <span className="spansno">{index + 1}. </span>
              {query}
            </li>
          );
        })}
      </ul>
      <button
        className="clear"
        onClick={() => {
          localStorage.setItem("list", JSON.stringify([]));
          setList([]);
        }}
      >
        Clear <AiOutlineDelete />
      </button>
    </div>
  );
};

export default History;
