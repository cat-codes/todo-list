import "./App.css";
import { GetThemeValue } from "./components/ThemeProvider.jsx";
import ThemeButton from "./components/ThemeButton.jsx";
import Header from "./components/Header.jsx";
import List from "./components/List.jsx";
import Footer from "./components/Footer.jsx";
import Background from "./components/Background.jsx";

function App() {
  const { theme } = GetThemeValue();
  document.body.style.color = theme === "dark" ? "#FFFFFF" : "#0D0D0D";

  return (
    <>
      <Background />
      <ThemeButton />
      <div id="contents">
        <Header />
        <List />
        <Footer />
      </div>
    </>
  );
}

export default App;
