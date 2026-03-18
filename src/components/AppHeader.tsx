import { useState } from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../constants/site";

export function AppHeader() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="z-20">
            <div className="bg-gray-100">
                <nav className="container mx-auto px-3 py-4 md:flex md:items-center md:justify-between">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="text-xl font-bold text-gray-800 hover:text-blue-400 md:text-2xl">
                            <img src="/Logo.png" className="size-15" alt="Clinica Sensory" />
                        </Link>

                        <div className="flex md:hidden">
                            <button
                                type="button"
                                className="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                                onClick={() => setShowMenu((prev) => !prev)}
                                aria-label="Abrir menu"
                            >
                                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                                    <path
                                        fillRule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <ul className={`${showMenu ? "flex" : "hidden"} mt-8 flex-col space-y-4 md:mt-0 md:flex md:flex-row md:items-center md:space-y-0 md:space-x-10`}>
                        {NAV_LINKS.map((item) => (
                            <li key={item.to} className="text-sm font-bold text-gray-800 hover:text-blue-400">
                                <Link to={item.to} onClick={() => setShowMenu(false)}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
