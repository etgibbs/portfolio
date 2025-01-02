import React from 'react';
import Banner from './Banner';
import Profile from './Profile';

export default function Hero() {
    return (
        <section className="w-full max-w-5xl flex flex-col sm:flex-row mb-10 mt-10 mx-auto">
            <Banner />
            <Profile />
        </section>
    );
}
