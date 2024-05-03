// App.js or index.js
import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import routes from "./routes";

const App = () => (
  <BrowserRouter>
    <NavBar />
    {routes()}
  </BrowserRouter>
);

export default App;
