import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "../common/Navigation/navigation";
import { Home } from "../features/Home/home";
import { Footer } from "../common/Footer/footer";
import { Product } from "../features/Products/Product/product";
import { Cart } from "../features/Cart/cart";
import { LogInPanel } from "../features/LogInPanel/logInPanel";
import { Registration } from "../features/Registration/registration";
import { Products } from "../features/Products/products";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path={"*"} element={<Navigate replace to="/Home" />}> </Route>
        <Route path="/Backpacks" element={<Products />} />
        <Route path="/Clothes" element={<Products />} />
        <Route path="/Shoes" element={<Products />} />
        <Route path="/Accessories" element={<Products />} />
        <Route path="/:category/:id" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Log-In" element={<LogInPanel />} />
        <Route path="/Registration" element={<Registration />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
