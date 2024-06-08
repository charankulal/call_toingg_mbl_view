import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container mx-auto px-4 py-2 flex justify-between items-center h-[80px]">
        <div className="flex items-center ">
          {" "}
          {/* New flex container for brand name and navbar */}
          <div className="text-lg font-bold mr-6">Toingg</div>{" "}
          {/* Brand name */}
          <nav className="hidden md:flex space-x-4 pt-6 bg-white shadow-md fixed  z-10 ml-96 mt-5 px-5 rounded-lg   h-[60px]">
            {" "}
            {/* Navbar visible on desktop (hidden on mobile) */}
            <Link
              href="#features"
              className="text-black hover:bg-orange-500 rounded-full pt-1 mb-2  mx-6 px-4"
            >
              <p>Contact</p>
            </Link>
            <Link
              href="#pricing"
              className="text-black hover:bg-orange-500 rounded-full pt-1 mb-2  mx-6 px-4"
            >
              <p>Pricing</p>
            </Link>
            <Link
              href="#documentation"
              className="text-black  hover:bg-orange-500 rounded-full pt-1 mb-2  mx-6 px-4"
            >
              <p>Documentation</p>
            </Link>
            <Link
              href="#join"
              className="text-black hover:bg-orange-500 rounded-full pt-1 mb-2  mx-6 px-4"
            >
              <p>Join Our Community</p>
            </Link>
          </nav>
        </div>
        <button className="md:hidden text-orange-500" onClick={toggleMenu}>
          <Image src="/icons/Menu.png" alt="Menu" width={35} height={35} />
        </button>
      </div>
      {/* Mobile menu */}
      <div
        className={`sm:flex space-x-4 ${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden bg-orange-300 mx-5 rounded-lg p-4 justify-center align-items-center`}
      >
        <nav
          className={`sm:flex flex-col sm:flex-row space-y-16 sm:space-y-0 sm:space-x-4 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <Link
            href="#features"
            className="text-black hover:text-orange-500 flex items-center justify-between mt-6"
          >
            <p>Contact</p>
            {isMenuOpen && (
              <Image
                src="/icons/Arrow.png"
                alt="arrow"
                width={40}
                height={40}
              />
            )}
          </Link>
          <Link
            href="#pricing"
            className="text-black hover:text-orange-500 flex items-center justify-between my-6 "
          >
            <p>Pricing</p>
            {isMenuOpen && (
              <Image
                src="/icons/Arrow.png"
                alt="arrow"
                width={40}
                height={40}
              />
            )}
          </Link>
          <Link
            href="#documentation"
            className="text-black hover:text-orange-500 flex items-center justify-between my-60"
          >
            <p>Documentation</p>
            {isMenuOpen && (
              <Image
                src="/icons/Arrow.png"
                alt="arrow"
                width={40}
                height={40}
              />
            )}
          </Link>

          <Link
            href="#join"
            className="text-black hover:text-orange-500 flex items-center justify-between pb-20 "
          >
            <p>Join Our Community</p>
            {isMenuOpen && (
              <Image
                src="/icons/Arrow.png"
                alt="arrow"
                width={40}
                height={40}
              />
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
