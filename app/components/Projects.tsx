import Image from 'next/image';
import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi'

const projects = [
    {
        id: 1,
        title: 'Portfolio',
        description: 'This website. Built with Next.js and Tailwind CSS.',
        image: '/portfolio-project.png',
        link: 'https://github.com/etgibbs/portfolio',
    },
    {
        id: 2,
        title: 'WIP',
        description: 'More to come!',
        image: '/',
        link: 'https://github.com/etgibbs/',
    },
    {
        id: 3,
        title: 'WIP',
        description: 'More to come!',
        image: '/',
        link: 'https://github.com/etgibbs/',
    },
    {
        id: 4,
        title: 'WIP',
        description: 'More to come!',
        image: '/',
        link: 'https://github.com/etgibbs/',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold font-funnel text-white mb-8">Selected Projects</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="border bg-opacity-85 border-gray-700 rounded-lg p-4 shadow-md bg-gray-800 hover:shadow-lg hover:-translate-y-2 hover:scale-102 transition-transform duration-300 ease-in-out"
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={200}
                            height={200}
                            className="rounded mb-4 w-full h-30 object-cover" />
                        <h4 className="text-xl font-semibold text-white mb-2 font-funnel">{project.title}</h4>
                        <p className="text-gray-300 text-sm mb-4 font-funnel">{project.description}</p>
                        <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm font-funnel"
                        >
                            View on GitHub
                        </Link>
                    </div>
                ))}
            </div>

            {/* Full List Button */}
            <div className="mt-8 w-full inline-flex justify-center">
                <Link
                    href="https://github.com/etgibbs?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 w-full bg-opacity-85 text-lg font-bold text-white
                    bg-blue-950 rounded-lg hover:bg-blue-500 transition-colors duration-300 inline-flex
                    items-center space-x-2"
                >
                    <FiExternalLink className="text-white text-xl" />
                    <span>View Full List of Projects</span>
                </Link>
            </div>

        </section>
    );
}
