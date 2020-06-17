import React from "react";

export const ThemeContext = React.createContext({ theme: {} });

export default function ThemeProvider(props) {
  return (
    <ThemeContext.Provider value={{ theme: props.theme || {} }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
