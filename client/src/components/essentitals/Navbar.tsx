import Logo from "./Logo";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
    const [isMobileNavActive, setIsMobileNavActive] = useState(false);

    return (
        <header className="flex items-center justify-between container mx-auto my-4 px-8 md:px-0">
            <div>
                <Logo />
            </div>

            <nav className="md:hidden">
                {isMobileNavActive ? (
                    <MobileNav setMobileNav={setIsMobileNavActive} />
                ) : (
                    <button
                        onClick={() => setIsMobileNavActive((curr) => !curr)}
                    >
                        <RxHamburgerMenu className="text-2xl" />
                    </button>
                )}
            </nav>

            <nav className="hidden md:flex justify-center space-x-8">
                <div className="flex space-x-8">
                    <Link to="/">Home</Link>
                    <Link to="/our-products">Our Products</Link>
                    <Link to="/categories">Categories</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/contact-us">Contact Us</Link>
                </div>

                <div>
                    <Link
                        to="/join-us"
                        className="px-4 py-2 bg-blue-600 rounded-full text-white font-bold hover:bg-blue-700 transition-all"
                    >
                        Join Us
                    </Link>
                </div>
            </nav>
        </header>
    );
}
