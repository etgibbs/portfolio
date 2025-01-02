import React from 'react';
import Banner from './Banner';
import Profile from './Profile';

export default function Hero() {
    return (
        <section className="w-full max-w-5xl flex flex-col items-center sm:flex-row mb-16 gap-8 mx-auto">
            <Banner />
            <Profile />
        </section>
    );
}
