import React from 'react';
import SocialLinks from './SocialLinks';
import { FiExternalLink } from 'react-icons/fi'
import Link from "next/link";

type JobBannerProps = {
    title: string;
    company: string;
    duration: string;
    description: string;
    link: string;
};

export function JobBanner({ title, company, duration, description, link }: JobBannerProps) {
    return (
        <Link
            href={link}
            target="_blank"
        >
            <div className="bg-gray-800 border border-gray-700 rounded-lg bg-opacity-85 p-4 mb-4 shadow-md
            hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-white inline-flex items-center space-x-4">
                    <span>{title}</span>
                    <FiExternalLink className="text-white text-xl inline-flex items-center" />

                </h3>
                <p className="text-sm text-gray-400 font py-1">
                        <strong>{company}</strong> | {duration}
                </p>
                <p className="text-gray-300 mt-2 inline">{description}</p>
            </div>
        </Link>
    );
}


export default function Banner() {
    return (
        <div className="flex-1 flex flex-col justify-center px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                <span className="typing-effect font-funnel">Hey, I’m Ethan!</span>
            </h2>
            <p className="text-lg sm:text-xl mb-6 leading-relaxed text-gray-200 font-funnel">
                I’m a <strong>software engineer</strong> who enjoys building complex systems. This is my
                portfolio—check out some of my recent work below.
            </p>

            {/* Social Links */}
            <SocialLinks />

            {/* Job Banners */}
            <div className="mb-6 py-6 spacing-y-6">
                <JobBanner
                    title="Software Engineer"
                    company="Agave"
                    duration="6/2025 to Present"
                    description="Agave is modernizing construction tech, creating a unified experience in a world of
                    siloed data and fragmented systems. Backed by Y Combinator, Accel, and more."
                    link={"https://www.agaveapi.com/"}
                />
                <JobBanner
                    title="Founding Engineer"
                    company="Confetti"
                    duration="3/2024 to 9/2024"
                    description="Core engineer behind streaming, authentication, and backend architecture.
                    Implemented infinite-scrolling video feed and client-side HLS encoding for low latency video."
                    link={"https://www.useconfetti.com/"}

                />
            </div>
        </div>
    );
}
