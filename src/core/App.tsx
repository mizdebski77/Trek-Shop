import { BrowserRouter } from "react-router-dom";
import { Navigation } from "../common/Navigation/navigation";
import { Home } from "../features/Home/home";
import { Footer } from "../common/Footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Home />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
