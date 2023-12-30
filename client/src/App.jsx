// Node modules
import { BrowserRouter, Route } from "react-router-dom";

// Project files
import Header from "./components/Header";
import Other from "./pages/Other";
import Home from "./pages/Home";
import "./styles/style.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/other" component={Other} />
      </div>
    </BrowserRouter>
  );
}
