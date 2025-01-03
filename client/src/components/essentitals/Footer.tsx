import Logo from "./Logo";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { TiSocialYoutube } from "react-icons/ti";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-zinc-800 text-white p-8 lg:py-8">
            <div className="grid lg:grid-cols-7 justify-between lg:p-8 container mx-auto items-center gap-4">
                <div className="lg:col-span-2">
                    <Logo />
                    <div className="lg:mt-8">
                        <p>
                            BuySutra is your one-stop online shopping
                            destination, offering a wide range of high-quality
                            products at unbeatable prices.
                        </p>
                    </div>
                </div>

                <div className="justify-center lg:col-span-5 grid grid-rows-3 md:grid-rows-1 md:grid-cols-2 lg:flex lg:justify-between lg:px-10 gap-4">
                    <div>
                        <h3 className="text-xl font-extrabold">Company</h3>

                        <div className="flex flex-col mt-2 lg:mt-8 space-y-1">
                            <Link
                                to="#"
                                className="font-semibold hover:underline-offset-4 hover:underline transition-all"
                            >
                                About Us
                            </Link>
                            <Link
                                to="#"
                                className="font-semibold hover:underline-offset-4 hover:underline transition-all"
                            >
                                Contact Us
                            </Link>
                            <Link
                                to="#"
                                className="font-semibold hover:underline-offset-4 hover:underline transition-all"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                to="#"
                                className="font-semibold hover:underline-offset-4 hover:underline transition-all"
                            >
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-extrabold">Online Shop</h3>

                        <div className="flex flex-col mt-2 lg:mt-8 space-y-1">
                            <Link
                                to="#"
                                className="font-semibold hover:underline-offset-4 hover:underline transition-all"
                            >
                                Home
                            </Link>
                            <Link
                                to="#"
                                className="font-semibold hover:underline-offset-4 hover:underline transition-all"
                            >
                                Our Products
                            </Link>
                            <Link
                                to="#"
                                className="font-semibold hover:underline-offset-4 hover:underline transition-all"
                            >
                                Our Categories
                            </Link>
                            <Link
                                to="#"
                                className="font-semibold hover:underline-offset-4 hover:underline transition-all"
                            >
                                Top Products
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-extrabold text-center">
                            Follow Us
                        </h3>

                        <div className="flex space-x-8 mt-2 lg:mt-8">
                            <Link to="#">
                                <CiInstagram className="text-2xl" />
                            </Link>
                            <Link to="#">
                                <FaSquareXTwitter className="text-2xl" />
                            </Link>
                            <Link to="#">
                                <FaFacebook className="text-2xl" />
                            </Link>
                            <Link to="#">
                                <TiSocialYoutube className="text-2xl" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center pb-8">
                <p className="font-bold text-lg">
                    Copyrigt &copy; {new Date().getFullYear()} by BuySutra -
                    Made with ❤️ by{" "}
                    <a href="https://github.com/hustlerZzZ">Prince Pal</a>
                </p>
            </div>
        </footer>
    );
}
