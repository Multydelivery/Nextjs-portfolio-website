import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[90vh] px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-black dark:text-white">
            Felipe Sanz
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Full Stack Developer & UI/UX Designer creating minimal, elegant digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/portfolio">
              <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                View Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-3 border border-black dark:border-white text-black dark:text-white font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-black dark:text-white">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div 
                key={item}
                className="group cursor-pointer"
              >
                <div className="bg-gray-100 dark:bg-gray-900 aspect-[4/3] mb-4 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors">
                  <span className="text-gray-500 dark:text-gray-400">Project {item}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-black dark:text-white">
                  Project Title {item}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Brief description of the project and technologies used.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-black dark:text-white">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Design', 'UI/UX', 'Figma'].map((skill) => (
              <div 
                key={skill}
                className="p-4 border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors"
              >
                <span className="text-black dark:text-white font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
