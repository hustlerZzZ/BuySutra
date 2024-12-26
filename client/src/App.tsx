import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Products from "./pages/Products.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about"  element={<About />} />
          <Route path="/contact"  element={<Contact />} />
          <Route path="/products"  element={<Products />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
