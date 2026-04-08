import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "../common/Navigation/navigation";
import { Home } from "../features/Home/home";
import { Footer } from "../common/Footer/footer";
import { Product } from "../features/Products/Product/product";
import { Cart } from "../features/Cart/cart";
import { LogInPanel } from "../features/LogInPanel/logInPanel";
import { Registration } from "../features/Registration/registration";
import { Products } from "../features/Products/products";
import { CartLogInPanel } from "../features/Cart/LogInCart/cartLogIn";
import { Wishlist } from "../features/Wishlist/wishlist";
import { Compare } from "../features/Compare/compare";
import { CompareBar } from "../features/Compare/CompareBar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path={"*"} element={<Navigate replace to="/Home" />} />
        <Route path="/Backpacks" element={<Products />} />
        <Route path="/Clothes" element={<Products />} />
        <Route path="/Shoes" element={<Products />} />
        <Route path="/Accessories" element={<Products />} />
        <Route path="/:category/:id" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Log-In" element={<LogInPanel />} />
        <Route path="/LogIn" element={<CartLogInPanel />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Compare" element={<Compare />} />
      </Routes>
      <CompareBar />
      <ToastContainer
        position="bottom-left"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
        style={{ zIndex: 9999 }}
      />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
