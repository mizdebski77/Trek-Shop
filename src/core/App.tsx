import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "../common/Navigation/navigation";
import { Home } from "../features/Home/home";
import { Footer } from "../common/Footer/footer";
import { Products } from "../features/Products/products";
import { Product } from "../features/Products/Product/product";
import { Cart } from "../features/Cart/cart";
import { LogInPanel } from "../features/LogInPanel/logInPanel";
import { Registration } from "../features/Registration/registration";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path={"*"} element={<Navigate replace to="/Home" />}> </Route>
        <Route path="/Hiking-backpacks" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Log-In" element={<LogInPanel />} />
        <Route path="/Registration" element={<Registration />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
