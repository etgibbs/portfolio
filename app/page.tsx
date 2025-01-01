import Image from 'next/image'
import { FiMail } from 'react-icons/fi'; // Email icon
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // LinkedIn and GitHub icons
import Link from 'next/link';


export default function Home() {
  return (
      <div
          id="home"
          className="min-h-screen flex flex-col items-center px-8 py-8 sm:px-20 sm:py-16 font-[family-name:var(--font-geist-sans)]">

        {/* NAVBAR */}
        <nav className="sticky top-0 w-screen flex justify-between items-center py-6 px-4 mb-12 bg-blue-950">
          {/* Left Side: Logo */}
          <Link href={"#home"}>
            <h1 className="text-xl font-bold">Ethan Gibbs</h1>
          </Link>

          {/* Right Side: Icons */}
          <div className="flex space-x-4">
            <Link
                href="https://www.linkedin.com/in/etgibbs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition"
            >
              <FaLinkedin className="text-2xl" />
            </Link>
            <Link
                href="https://github.com/etgibbs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition"
            >
              <FaGithub className="text-2xl" />
            </Link>
          </div>
        </nav>


        {/* HERO SECTION */}
        <section
            className="w-full max-w-5xl flex flex-col items-center sm:flex-row mb-16 gap-8"
        >
          {/* Left Side: Intro Text */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Hey, I’m Ethan!</h2>
            <p className="text-lg sm:text-xl mb-6 leading-relaxed">
              I’m a software engineer with a passion for building. I am currently focusing on multi-tenant systems.
              This is my portfolio—check out some of my work below.
            </p>
            <Link
                href={"#contact"}
                className="inline-block mt-2 rounded-full border border-transparent bg-foreground text-background py-2 px-6 text-sm font-bold hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              Get in Touch
            </Link>
          </div>

          {/* Right Side: Headshot + Education Banner */}
          <div className="flex-1 flex flex-col items-center">
            <Image
                src="/headshot.png"   // Your headshot in public folder
                alt="Hero section"
                width={400}
                height={400}
                className="rounded-xl shadow-lg"
                priority
            />
            {/* Education Banner */}
            <div className="bg-blue-950 mt-4 w-[400px] py-4 px-6 flex items-center gap-4 rounded">
              {/* Logo */}
              <Image
                  src="/college-logo.png"
                  alt="UM Logo"
                  width={60}
                  height={40}
                  className="object-contain"
              />
              {/* College Info */}
              <div className="flex flex-col items-start">
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  University of Michigan
                </h3>
                <span className="text-sm sm:text-base text-gray-300">
                  B.S. Computer Science
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section
            id="projects"
            className="w-full max-w-5xl mb-16 flex flex-col items-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8">Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Example Project #1 */}
            <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
              <Image
                  src="/project1.png"
                  alt="Project 1"
                  width={300}
                  height={200}
                  className="rounded mb-2"
              />
              <h4 className="text-xl font-semibold mb-1">Project One</h4>
              <p className="text-sm mb-2">
                A brief description of Project One. Built with Next.js and
                Tailwind CSS.
              </p>
              <Link
                  href="https://github.com/your-github-username/project-one"
                  target="_blank"
                  className="text-blue-600 hover:underline text-sm"
              >
                View on GitHub
              </Link>
            </div>

            {/* Example Project #2 */}
            <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
              <Image
                  src="/project2.png"
                  alt="Project 2"
                  width={300}
                  height={200}
                  className="rounded mb-2"
              />
              <h4 className="text-xl font-semibold mb-1">Project Two</h4>
              <p className="text-sm mb-2">
                A brief description of Project Two. Built with React and Node.js.
              </p>
              <Link
                  href="https://github.com/your-github-username/project-two"
                  target="_blank"
                  className="text-blue-600 hover:underline text-sm"
              >
                View on GitHub
              </Link>
            </div>

            {/* Add more project cards as needed */}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section
            id="contact"
            className="w-full max-w-5xl mb-16 flex flex-col items-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6">Contact Me</h3>
          <p className="text-center mb-4 text-lg">
            Interested in working together or just want to say hi? Reach out!
          </p>
          {/* Social links with icons */}
          <div className="flex space-x-6">
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
        </section>

        {/* FOOTER */}
        <footer className="mt-auto py-4">
          <p className="text-center text-xs text-gray-500">
            © {new Date().getFullYear()} Ethan Gibbs. All rights reserved.
          </p>
        </footer>
      </div>
  )
}
