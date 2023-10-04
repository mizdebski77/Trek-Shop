import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Navigation } from "../common/Navigation/navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
