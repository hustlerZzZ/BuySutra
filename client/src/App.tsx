import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Products from "./pages/Products.tsx";
import Layout from "./components/essentitals/Layout.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/our-products" element={<Products />} />
                    <Route path="/categories" element={<Products />} />
                    <Route path="/about-us" element={<About />} />
                    <Route path="/contact-us" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
