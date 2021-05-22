import React, { useState, useContext } from "react";
import * as Papa from "papaparse";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const showData = (filename) => {
    const url = `https://raw.githubusercontent.com/graphql-compose/graphql-compose-examples/master/examples/northwind/data/csv/${filename}.csv`;
    Papa.parse(url, {
      download: true,
      complete: function (items) {
        let itemarr = items.data;
        console.log(itemarr.length);
        const n = itemarr.length;
        itemarr = itemarr.slice(0, n - 1);
        setData(itemarr);
      },
    });
  };

  return (
    <AppContext.Provider value={{ data, showData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
