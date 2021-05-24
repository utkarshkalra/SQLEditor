import React from "react";

import { useGlobalContext } from "../context";
import csvfiles from "../sidebar/csvfiles";

const Table = () => {
  const { data } = useGlobalContext();

  if (data === csvfiles) {
    return (
      <table>
        <tbody>
          <th>S.No.</th>
          <th>Tables in CSV_files</th>
          {data.map((tablename, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{tablename}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  if (data.length === 1) {
    return <p className="database">{data[0]}</p>;
  }

  return (
    <table>
      <tbody>
        {data.map((row, pindex) => {
          if (row === data[0]) {
            return (
              <tr key={pindex}>
                <th className="sno">S.No.</th>
                {row.map((content, index) => {
                  return <th key={`${pindex}+${index}`}>{content}</th>;
                })}
              </tr>
            );
          }
          return (
            <tr key={pindex}>
              <td className="sno">{pindex}.</td>
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
