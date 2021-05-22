import React from "react";

import { useGlobalContext } from "../context";

const Table = () => {
  const { data } = useGlobalContext();
  return (
    <table>
      <tbody>
        {data.map((row, pindex) => {
          if (row === data[0]) {
            return (
              <tr key={pindex}>
                {row.map((content, index) => {
                  return <th key={`${pindex}+${index}`}>{content}</th>;
                })}
              </tr>
            );
          }
          return (
            <tr key={pindex}>
              {row.map((content, index) => {
                return <td key={`${pindex}+${index}`}>{content}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
