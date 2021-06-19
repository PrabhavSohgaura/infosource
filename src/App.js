import "./App.css";
import Header from "./components/Header";
import { NewsContextProvider } from "./NewsContext";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <NewsContextProvider>
      <Header />
      <HomeScreen />
    </NewsContextProvider>
  );
}

export default App;
