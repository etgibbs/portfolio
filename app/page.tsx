import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer';
import Projects from './components/Projects';

export default function Home() {
    return (
        <div id="home" className="relative min-h-screen bg-gradient-to-t from-neutral-900/85 to-black bg-cover bg-center">
            {/* Background Image with Opacity */}

            {/* Content */}
            <div className="relative z-10">
                <Navbar/>
                <Hero/>
                <Projects/>
                <Footer/>
            </div>
        </div>
    );
}
