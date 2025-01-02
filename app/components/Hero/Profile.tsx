import React from 'react';
import Image from 'next/image';
import Education from './Education';

export default function Profile() {
    return (
        <div className="flex-1 flex flex-col items-center w-full px-6">
            <Image
                src="/headshot.png"
                alt="Hero section"
                width={450}
                height={350}
                className="rounded-xl shadow-lg"
                priority
            />
            <Education />
        </div>
    );
}
