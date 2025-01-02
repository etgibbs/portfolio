import React from 'react';
import Image from 'next/image';

export default function Education() {
    return (
        <div className="bg-blue-950 mt-4 py-4 px-4 w-full flex items-center gap-4 rounded bg-opacity-85">
            <Image
                src="/college-logo.png"
                alt="UM Logo"
                width={50}
                height={50}
                className="object-contain"
            />
            <div className="flex flex-col items-start">
                <h3 className="text-lg sm:text-xl font-bold font-funnel text-white">
                    University of Michigan
                </h3>
                <span className="text-sm sm:text-base text-gray-300 font-funnel">
          B.S. Computer Science
        </span>
            </div>
        </div>
    );
}
