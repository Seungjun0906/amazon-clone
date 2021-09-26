import "./App.css";

// Components
import Header from "./UI/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Home */}
      <Home />
    </div>
  );
}

export default App;
