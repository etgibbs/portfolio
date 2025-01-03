import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav className="sticky top-0 w-screen flex justify-between items-center py-6 px-10 mb-12
        bg-gradient-to-r from-neutral-900/85 to-black bg-cover z-10">
            {/* Left Side: Logo */}
            <Link href={"#home"}>
                <h1 className="text-xl font-bold text-white font-funnel">Ethan Gibbs</h1>
            </Link>
            {/* Right Side: Icons */}
            <div className="flex space-x-4 font-funnel">
                <Link
                    href="https://www.linkedin.com/in/etgibbs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition"
                >
                    <FaLinkedin className="text-2xl" />
                </Link>
                <Link
                    href="https://github.com/etgibbs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition"
                >
                    <FaGithub className="text-2xl" />
                </Link>
            </div>
        </nav>
    );
}
