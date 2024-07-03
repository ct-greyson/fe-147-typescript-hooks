import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AuthExample from "./components/AuthExample";
import ItemComponent from "./components/ItemComponent";
import ThemeContext from "./context/ThemeContext";
import ThemeProvider from "./context/ThemeProvider";
import ParentComponent from "./callbacks/ParentComponent";
import CounterCallback from "./callbacks/CounterCallback";

function App() {
  const [count, setCount] = useState<number>(0);
  const [theme, setTheme] = useState<string>("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const handleIncrement = () => {
    setCount(count + 1)
  };

  const handleDecrement = () => {
    setCount(count - 1)
  };

  return (
    <>
      {/* <AuthExample /> */}
      {/* <ItemComponent /> */}
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemeProvider />
        <ParentComponent />
      </ThemeContext.Provider>
      <h1>COUNT: {count}</h1>
      <CounterCallback
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </>
  );
}

export default App;
