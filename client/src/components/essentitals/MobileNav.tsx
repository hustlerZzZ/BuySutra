import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

type MobileNavProps = {
    setMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileNav({ setMobileNav }: MobileNavProps) {
    return (
        <div className="flex flex-col absolute w-96 -translate-x-28 bg-zinc-600 text-white top-0 p-8 space-y-8 h-svh">
            <div>
                <button
                    className="text-2xl"
                    onClick={() => setMobileNav((curr: boolean) => !curr)}
                >
                    <IoClose />
                </button>
            </div>
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2">
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
            </div>
        </div>
    );
}

export default MobileNav;
