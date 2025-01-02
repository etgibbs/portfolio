import Image from 'next/image';
import { FiMail } from 'react-icons/fi'; // Email icon
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // LinkedIn and GitHub icons
import Link from 'next/link';

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
          {/* NAVBAR */}
          <nav className="sticky top-0 w-screen flex justify-between items-center py-6 px-4 mb-6 bg-black bg-opacity-85 z-10">
            {/* Left Side: Logo */}
            <Link href={"#home"}>
              <h1 className="text-xl font-bold text-white font-funnel">Ethan Gibbs</h1>
            </Link>
            {/* Right Side: Icons */}
            <div className="flex space-x-4 font-funnel">
              <Link
                  href="https://www.linkedin.com/in/etgibbs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition"
              ><FaLinkedin className="text-2xl"/>
              </Link>
              <Link
                  href="https://github.com/etgibbs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition"
              ><FaGithub className="text-2xl"/>
              </Link>
            </div>
          </nav>

          {/* HERO SECTION */}
          <section className="w-full max-w-5xl flex flex-col items-center sm:flex-row mb-16 gap-8 mx-auto">

            {/* Left Side: Intro Text */}
            <div className="flex-1 flex flex-col justify-center px-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                <span className="typing-effect font-funnel">Hey, I’m Ethan!</span>
              </h2>
              <p className="text-lg sm:text-xl mb-6 leading-relaxed text-gray-200 font-funnel">
                I’m a software engineer who enjoys building complex systems.
                This is my portfolio—check out some of my work below.
              </p>
              <p className="inline-flex items-center justify-center space-x-8 mt-2 rounded-full border
              border-transparent bg-white text-blue-950 py-2 text-sm font-bold hover:border-gray-800">
                  <Link
                      href="mailto:emg2194@gmail.com"
                      className="flex items-center text-blue-600 hover:underline text-sm sm:text-base"
                  ><FiMail className="mr-2 text-lg"/> Email
                  </Link>
                  <Link
                      href="https://www.linkedin.com/in/etgibbs/"
                      target="_blank"
                      className="flex items-center text-blue-600 hover:underline text-sm sm:text-base"
                  ><FaLinkedin className="mr-2 text-lg"/> LinkedIn
                  </Link>
                  <Link
                      href="https://github.com/etgibbs"
                      target="_blank"
                      className="flex items-center text-blue-600 hover:underline text-sm sm:text-base"
                  ><FaGithub className="mr-2 text-lg"/> GitHub
                  </Link>
              </p>
            </div>

            {/* Right Side: Headshot + Education Banner */}
            <div className="flex-1 flex flex-col items-center w-full px-6">
              <Image
                  src="/headshot.png"
                  alt="Hero section"
                  width={450}
                  height={350}
                  className="rounded-xl shadow-lg"
                  priority
              />

              {/* Education Banner */}
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
                  <span className="text-sm sm:text-base text-gray-300 font-funnel"> B.S. Computer Science </span>
                </div>
              </div>
            </div>
          </section>

          {/*/!* PROJECTS SECTION *!/*/}
          {/*<section id="projects" className="w-full px-6 max-w-5xl mb-16 flex flex-col items-center mx-auto">*/}
          {/*  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 font-funnel">Projects</h3>*/}
          {/*  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">*/}
          {/*    /!* Example Project #1 *!/*/}
          {/*    <div className="border border-gray-200 rounded-lg p-4 shadow-sm bg-gray-800">*/}
          {/*      <Image*/}
          {/*          src="/"*/}
          {/*          alt="Project 1"*/}
          {/*          width={300}*/}
          {/*          height={200}*/}
          {/*          className="rounded mb-2"*/}
          {/*      />*/}
          {/*      <h4 className="text-xl font-semibold mb-1">Project One</h4>*/}
          {/*      <p className="text-sm mb-2">*/}
          {/*        A brief description of Project One. Built with Next.js and Tailwind CSS.*/}
          {/*      </p>*/}
          {/*      <Link*/}
          {/*          href="https://github.com/your-github-username/project-one"*/}
          {/*          target="_blank"*/}
          {/*          className="text-blue-600 hover:underline text-sm"*/}
          {/*      >*/}
          {/*        View on GitHub*/}
          {/*      </Link>*/}
          {/*    </div>*/}

          {/*    /!* Example Project #2 *!/*/}
          {/*    <div className="border border-gray-200 rounded-lg p-4 shadow-sm bg-gray-800">*/}
          {/*      <Image*/}
          {/*          src="/"*/}
          {/*          alt="Project 2"*/}
          {/*          width={300}*/}
          {/*          height={200}*/}
          {/*          className="rounded mb-2"*/}
          {/*      />*/}
          {/*      <h4 className="text-xl font-semibold mb-1">Project Two</h4>*/}
          {/*      <p className="text-sm mb-2">*/}
          {/*        A brief description of Project Two. Built with React and Node.js.*/}
          {/*      </p>*/}
          {/*      <Link*/}
          {/*          href="https://github.com/your-github-username/project-two"*/}
          {/*          target="_blank"*/}
          {/*          className="text-blue-600 hover:underline text-sm"*/}
          {/*      >*/}
          {/*        View on GitHub*/}
          {/*      </Link>*/}
          {/*    </div>*/}

          {/*    /!* Add more project cards as needed *!/*/}
          {/*  </div>*/}
          {/*</section>*/}

          {/* FOOTER */}
          <footer className="mt-auto py-4">
            <p className="text-center text-xs text-gray-400">
              © {new Date().getFullYear()} Ethan Gibbs. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
  );
}
