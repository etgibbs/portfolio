import React from 'react';
import SocialLinks from './SocialLinks';

export default function Banner() {
    return (
        <div className="flex-1 flex flex-col justify-center px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                <span className="typing-effect font-funnel">Hey, I’m Ethan!</span>
            </h2>
            <p className="text-lg sm:text-xl mb-6 leading-relaxed text-gray-200 font-funnel">
                I’m a software engineer who enjoys building complex systems. This is my
                portfolio—check out some of my work below.
            </p>
            <SocialLinks />
        </div>
    );
}
