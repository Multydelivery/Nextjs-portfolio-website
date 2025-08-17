export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications',
      excerpt: 'Best practices for structuring and scaling React applications in production environments.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Development',
      featured: true
    },
    {
      id: 2,
      title: 'The Future of Web Design',
      excerpt: 'Exploring upcoming trends and technologies that will shape the future of web design.',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Design',
      featured: false
    },
    {
      id: 3,
      title: 'TypeScript Best Practices',
      excerpt: 'Essential TypeScript patterns and practices for better code quality and developer experience.',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Development',
      featured: false
    },
    {
      id: 4,
      title: 'Minimalist Design Principles',
      excerpt: 'Understanding how less can be more in modern digital design and user experience.',
      date: '2023-12-28',
      readTime: '5 min read',
      category: 'Design',
      featured: true
    },
    {
      id: 5,
      title: 'Next.js 14 Features Deep Dive',
      excerpt: 'Exploring the latest features and improvements in Next.js 14 and how to use them effectively.',
      date: '2023-12-20',
      readTime: '12 min read',
      category: 'Development',
      featured: false
    },
    {
      id: 6,
      title: 'Creating Accessible Web Interfaces',
      excerpt: 'A comprehensive guide to building web applications that are accessible to everyone.',
      date: '2023-12-15',
      readTime: '9 min read',
      category: 'Development',
      featured: false
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-white">
            Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thoughts on development, design, and the intersection of technology and creativity
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-8 text-black dark:text-white">
            Featured Posts
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article 
                key={post.id}
                className="group cursor-pointer"
              >
                <div className="bg-gray-100 dark:bg-gray-900 aspect-[16/9] mb-6 flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors">
                  <span className="text-gray-500 dark:text-gray-400">Featured Image</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="px-3 py-1 border border-gray-300 dark:border-gray-700 uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="pt-2">
                    <span className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-black dark:text-white">
            All Posts
          </h2>
          <div className="space-y-8">
            {regularPosts.map((post) => (
              <article 
                key={post.id}
                className="group cursor-pointer border-b border-gray-200 dark:border-gray-800 pb-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <div className="bg-gray-100 dark:bg-gray-900 aspect-[4/3] flex items-center justify-center group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors">
                      <span className="text-gray-500 dark:text-gray-400 text-sm">Image</span>
                    </div>
                  </div>
                  <div className="lg:col-span-3 space-y-3">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="px-3 py-1 border border-gray-300 dark:border-gray-700 uppercase tracking-wide">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="pt-2">
                      <span className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 pt-20 border-t border-gray-200 dark:border-gray-800 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">
            Stay Updated
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Subscribe to get notified about new blog posts and updates on web development and design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white"
            />
            <button className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
