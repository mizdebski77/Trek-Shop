import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "../common/Navigation/navigation";
import { Home } from "../features/Home/home";
import { Footer } from "../common/Footer/footer";
import { Products } from "../features/Products/products";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path={"*"} element={<Navigate replace to="/Home" />}> </Route>
        <Route path="/Hiking-backpacks" element={<Products />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
