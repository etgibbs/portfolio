import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer';

export default function Home() {
    return (
        <div id="home" className="relative min-h-screen bg-black bg-cover bg-center">
            {/* Background Image with Opacity */}
            <div
                className="absolute inset-0 bg-center bg-cover opacity-50"
                style={{
                    backgroundImage: "url('/topology.png')", // Replace with the correct path to your PNG file
                }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
                <Navbar />
                <Hero />
                <Footer />
            </div>
        </div>
    );
}
