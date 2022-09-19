import { BrowserRouter, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
      </div>
    </BrowserRouter>
  );
}

export default App;
