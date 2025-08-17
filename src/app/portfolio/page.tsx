export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce solution built with Next.js and Stripe integration',
      tech: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      category: 'Web Development'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      category: 'Full Stack'
    },
    {
      id: 3,
      title: 'Design System',
      description: 'Comprehensive design system and component library',
      tech: ['React', 'Storybook', 'Figma', 'CSS-in-JS'],
      category: 'UI/UX Design'
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking interface with modern UX',
      tech: ['React Native', 'TypeScript', 'Redux', 'Biometrics'],
      category: 'Mobile Development'
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive charts',
      tech: ['React', 'D3.js', 'Python', 'FastAPI'],
      category: 'Data Visualization'
    },
    {
      id: 6,
      title: 'SaaS Landing Page',
      description: 'High-converting landing page for SaaS product',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
      category: 'Web Design'
    }
  ];

  const categories = ['All', 'Web Development', 'Full Stack', 'UI/UX Design', 'Mobile Development', 'Data Visualization', 'Web Design'];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-white">
            Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in web development, design, and user experience
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button 
              key={category}
              className="px-6 py-2 border border-gray-300 dark:border-gray-700 text-black dark:text-white hover:border-black dark:hover:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group cursor-pointer"
            >
              {/* Project Image Placeholder */}
              <div className="bg-gray-100 dark:bg-gray-900 aspect-[4/3] mb-6 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors">
                <span className="text-gray-500 dark:text-gray-400">Project Image</span>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4 pt-2">
                  <button className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                    View Live →
                  </button>
                  <button className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                    View Code →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 pt-20 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
            Interested in Working Together?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            I am always open to discussing new opportunities and interesting projects.
          </p>
          <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}
