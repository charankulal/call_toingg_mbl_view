// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white shadow-md fixed w-full z-10">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center h-[60px]">
                <div className="text-lg font-bold">Toingg</div>
                <button className="md:hidden text-orange-500" onClick={toggleMenu}>
                    <Image src="/icons/Menu.png" alt="Menu" width={35} height={35} />
                </button>
            </div>
            <div
                className={`sm:flex space-x-4 ${isMenuOpen ? "block" : "hidden"
                    } bg-orange-300
        mx-5 rounded-lg p-4 justify-center align-items-center        `}
            >
                <nav className={`sm:flex space-x-4 ${isMenuOpen ? "block" : "hidden"}`}>
                    <Link
                        href="#features"
                        className="flex items-center justify-between text-black hover:text-orange-500 mt-5"
                    >
                        <p className="ml-4">Contact</p>
                        <Image src="/icons/Arrow.png" alt="arrow" width={40} height={40} />
                    </Link>
                    <Link
                        href="#pricing"
                        className="flex items-center justify-between text-black hover:text-orange-500 mt-14"
                    >
                        <p className="mr-auto">Pricing</p>
                        <Image src="/icons/Arrow.png" alt="arrow" width={40} height={40} />
                    </Link>
                    <Link
                        href="#documentation"
                        className="flex items-center justify-between text-black hover:text-orange-500 mt-14"
                    >
                        <p className="mr-auto">Documentation</p>
                        <Image src="/icons/Arrow.png" alt="arrow" width={40} height={40} />
                    </Link>
                    <Link
                        href="#join"
                        className="flex items-center justify-between text-black hover:text-orange-500 mt-14  mb-14"
                    >
                        <p className="mr-auto">Join Our Community</p>
                        <Image src="/icons/Arrow.png" alt="arrow" width={40} height={40} />
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
