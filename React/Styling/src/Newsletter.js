import React from "react";
import { ThemeContext } from "./ThemeContext.js";

function Newsletter(props) {
  const [email, setEmail] = React.useState("");
  const [emailFocused, setEmailFocused] = React.useState(false);
  const { width } = useWindowDimensions();
  const { theme } = React.useContext(ThemeContext);
  const emailPartsCount = countEmailParts(email);

  return (
    <section style={styles.container({ width })}>
      <div style={styles.spectrum()} aria-hidden>
        {Array.from(Array(5)).map((_, i) => (
          <div
            style={styles.bar({ active: i + 1 < emailPartsCount, i })}
            key={i}
          ></div>
        ))}
      </div>
      <header style={styles.header({ theme })}>
        <h2 style={styles.headerH2()}>Get the newsletter</h2>
      </header>
      <input
        style={styles.email({ theme, focused: emailFocused })}
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
        onFocus={() => setEmailFocused(true)}
        onBlur={() => setEmailFocused(false)}
      />
      <button style={styles.submit()}>Sign up</button>
    </section>
  );
}

export default Newsletter;

const color = {
  spectrum1: "#ff598a",
  spectrum2: "#de56e8",
  spectrum3: "#b36bff",
  spectrum4: "#5b56e8",
  spectrum5: "#5e9fff",
};

const styles = {
  container: ({ width }) => ({
    position: "relative",
    maxWidth: width >= 800 ? "700px" : "100%",
    fontSize: width >= 800 ? "2.25em" : "1.25em",
    padding: "1em 1em 2em 1em",
    background: "#2b283d",
  }),
  spectrum: () => ({
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    width: "100%",
    display: "flex",
    alignItems: "flex-end",
    pointerEvents: "none",
  }),
  bar: ({ active, i }) => ({
    height: active ? "100%" : "0.5em",
    width: "20%",
    transformOrigin: "bottom",
    transition: "all 1s",
    background: color[Object.keys(color)[i % Object.keys(color).length]],
  }),
  header: ({ theme }) => ({
    position: "relative",
    color: theme.header.fg ? theme.header.fg : "white",
    zIndex: "1",
    textTransform: "uppercase",
    fontSize: "0.85em",
    textShadow: "0 3px 2px #000",
  }),
  headerH2: () => ({
    margin: "0 0 0.5em 0",
  }),
  email: ({ theme, focused }) => ({
    position: "relative",
    height: "2em",
    lineHeight: "2em",
    fontSize: "0.85em",
    padding: "0 0.5em",
    width: "100%",
    margin: "0.15em",
    border: "1px solid black",
    color: theme.input.color ? theme.input.color : "inherit",
    background: theme.input.background || "inherit",
    textAlign: "inherit",
    outlineOffset: "0.15em",
    outline: focused ? "2px solid #FFF" : "none",
  }),
  submit: () => ({
    position: "absolute",
    left: "50%",
    bottom: "0",
    overflow: "hidden",
    padding: "0",
    margin: "0",
    background: "transparent",
    border: "0",
    borderBottom: 0,
    textTransform: "uppercase",
    transition: "all 300ms",
    fontSize: "0",
    zIndex: "1",
    color: "#070222",
    fontWeight: "bold",
    cursor: "pointer",
    outlineOffset: "4px",
    outline: "none",
  }),
};

function countEmailParts(email) {
  if (/@.+\..{2,}$/.test(email)) {
    return 5;
  } else if (/@.+\..?$/.test(email)) {
    return 4;
  } else if (/@.+$/.test(email)) {
    return 3;
  } else if (/@/.test(email)) {
    return 2;
  } else if (/.+/.test(email)) {
    return 1;
  } else {
    return 0;
  }
}

function useWindowDimensions() {
  const [windowDimensions, setWindow] = React.useState({
    width: window.innerWidth,
  });

  React.useEffect(() => {
    function handleResize() {
      setWindow({ width: window.innerWidth });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return windowDimensions;
}
