export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-white">
            Contact
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to start a project or just want to chat? I would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
              Send a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                  Name
                </label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                  Email
                </label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                  Subject
                </label>
                <input 
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-black dark:text-white mb-2">
                  Message
                </label>
                <textarea 
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button 
                type="submit"
                className="w-full px-8 py-3 bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-black dark:text-white">
              Get in Touch
            </h2>
            <div className="space-y-8">
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I am always interested in new opportunities, whether that is working on a freelance project, 
                joining a team, or just having a conversation about technology and design.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 border border-black dark:border-white flex items-center justify-center mt-1">
                    <span className="text-xs">@</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black dark:text-white mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">hello@felipesanz.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 border border-black dark:border-white flex items-center justify-center mt-1">
                    <span className="text-xs">in</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black dark:text-white mb-1">LinkedIn</h3>
                    <p className="text-gray-600 dark:text-gray-400">/in/felipe-sanz</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 border border-black dark:border-white flex items-center justify-center mt-1">
                    <span className="text-xs">gh</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black dark:text-white mb-1">GitHub</h3>
                    <p className="text-gray-600 dark:text-gray-400">@felipesanz</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 border border-black dark:border-white flex items-center justify-center mt-1">
                    <span className="text-xs">tw</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black dark:text-white mb-1">Twitter</h3>
                    <p className="text-gray-600 dark:text-gray-400">@felipesanz</p>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
                <h3 className="font-semibold text-black dark:text-white mb-3">Current Status</h3>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-400">Available for new projects</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                  Response time: Usually within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 pt-20 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold mb-12 text-center text-black dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary based on scope and complexity. Most projects range from 2-12 weeks.'
              },
              {
                question: 'Do you work with international clients?',
                answer: 'Yes, I work with clients worldwide and am comfortable with remote collaboration across time zones.'
              },
              {
                question: 'What technologies do you specialize in?',
                answer: 'I specialize in React, Next.js, TypeScript, Node.js, and modern web technologies.'
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes, I offer maintenance and support packages for projects after launch.'
              }
            ].map((faq, index) => (
              <div key={index} className="space-y-3">
                <h3 className="font-semibold text-black dark:text-white">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
