import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Navigation } from "../common/Navigation/navigation";
import { Home } from "../features/Home/home";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Home />
    </BrowserRouter>
  );
}

export default App;
