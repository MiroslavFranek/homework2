import React from "react";
import Navbar from "./components/navbar/navbar.jsx";
import Home from "./pages/Home.js";
import Shops from "./pages/Shops.js";
import Graph from "./pages/Graph.js";

function App() {
  let Component
  switch (window.location.pathname){
    case "/":
      Component = Home
      break
    case "/shops":
      Component = Shops
      break
    case "/graph":
      Component = Graph
      break
  }
  return (
    <>
      <Navbar/>
      <Component/>
    </>
  )
}

export default App;