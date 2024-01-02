import React from 'react';

export const GlobalContext = React.createContext();

const GlobalStorage = ({ children }) => {
  return (
    <GlobalContext.Provider
      value={{
        urlTemplate:
          'https://geo.ipify.org/api/v2/country,city?apiKey=at_e4INECbQUmars02uVjZT5Lxy6h9tA',
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalStorage;
