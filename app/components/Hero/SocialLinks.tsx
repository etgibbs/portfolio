import React from 'react';
import Link from 'next/link';
import { FiMail } from 'react-icons/fi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function SocialLinks() {
    return (
        <div className="inline-flex items-center justify-center space-x-8 mt-2 rounded-full border border-transparent bg-white text-blue-950 py-2 text-sm font-bold hover:border-gray-800">
            <Link
                href="mailto:emg2194@gmail.com"
                className="flex items-center text-blue-600 hover:underline text-sm sm:text-base"
            >
                <FiMail className="mr-2 text-lg" /> Email
            </Link>
            <Link
                href="https://www.linkedin.com/in/etgibbs/"
                target="_blank"
                className="flex items-center text-blue-600 hover:underline text-sm sm:text-base"
            >
                <FaLinkedin className="mr-2 text-lg" /> LinkedIn
            </Link>
            <Link
                href="https://github.com/etgibbs"
                target="_blank"
                className="flex items-center text-blue-600 hover:underline text-sm sm:text-base"
            >
                <FaGithub className="mr-2 text-lg" /> GitHub
            </Link>
        </div>
    );
}
