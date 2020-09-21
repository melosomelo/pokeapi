import React, { createContext, useState } from "react";

const Context = createContext();

function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);
  return (
    <Context.Provider value={{ loading, setLoading }}>
      {children}
    </Context.Provider>
  );
}

export { Context, LoadingProvider };
