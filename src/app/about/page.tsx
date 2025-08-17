import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-white">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex justify-center">
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg max-w-md w-full">
              <Image 
                src="/profilepicwhitebackground.jpeg" 
                alt="Felipe Sanz Profile Photo"
                width={400}
                height={533}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-black dark:text-white">
              Hello, I&apos;m Felipe
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I&apos;m a full-stack developer and UI/UX designer with over 5 years of experience 
              creating digital products that solve real-world problems. I specialize in 
              modern web technologies and have a passion for clean, minimal design.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new design trends, 
              contributing to open-source projects, or enjoying a good cup of coffee 
              while brainstorming the next big idea.
            </p>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-black dark:text-white">
            Experience
          </h2>
          <div className="space-y-8">
            {[
              {
                year: '2023 - Present',
                title: 'Senior Full Stack Developer',
                company: 'Tech Company',
                description: 'Leading development of modern web applications using React, Next.js, and Node.js'
              },
              {
                year: '2021 - 2023',
                title: 'Frontend Developer',
                company: 'Design Agency',
                description: 'Created responsive web interfaces and collaborated with design teams'
              },
              {
                year: '2019 - 2021',
                title: 'Junior Developer',
                company: 'Startup',
                description: 'Learned the fundamentals of web development and agile methodologies'
              }
            ].map((item, index) => (
              <div key={index} className="border-l-2 border-gray-200 dark:border-gray-800 pl-6 ml-4">
                <div className="bg-black dark:bg-white w-4 h-4 rounded-full -ml-8 mt-1.5"></div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{item.year}</div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-1">{item.title}</h3>
                <div className="text-gray-600 dark:text-gray-400 mb-2">{item.company}</div>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12 text-black dark:text-white">
            What I Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 
              'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS',
              'Figma', 'Adobe Creative Suite', 'Git', 'Linux'
            ].map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-black dark:text-white hover:border-black dark:hover:border-white transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
