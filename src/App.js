import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import './App.css';
import Homepage from "./components/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Homepage />
      </div>
    </BrowserRouter>
  );
}

export default App;
