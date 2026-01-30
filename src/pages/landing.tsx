import React from 'react'
import Navbar from '../components/Navbar'

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section - More casual, less structured */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img 
                src="/Brendan.png" 
                alt="Brendan" 
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-gray-100 dark:border-gray-800 shadow-lg"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-8 flex-1">
            <div>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">Hey there 👋</p>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                I'm Brendan
              </h1>
              <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 font-light">
                I build things for the web
              </p>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Currently exploring React, TypeScript, and whatever else catches my interest. 
                This site is a work in progress—kind of like everything I build.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gray-900 dark:bg-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                Let's talk
              </a>
              <a 
                href="https://github.com/AdjudicatorMe" 
                className="inline-flex items-center px-6 py-3 text-base font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
              >
                GitHub →
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* What I'm working with - Less grid, more organic */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            What I work with
          </h2>
          
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              React
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              TypeScript
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              Tailwind CSS
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              Node.js
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              Python
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              Git
            </span>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* About - Simple and direct */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              A bit about me
            </h2>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a developer who enjoys creating things that live on the internet. 
                My interest in web development started back when I was trying to customize my MySpace page, 
                and here we are today.
              </p>
              
              <p>
                These days, I focus on building accessible, user-friendly websites and applications. 
                I like working on projects that challenge me to learn something new.
              </p>

              <p>
                When I'm not coding, you'll probably find me reading, making coffee, or exploring new tech.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Projects teaser - Minimal */}
      <section id="features" className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Things I've built
          </h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                This website
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Built with React, TypeScript, and Tailwind. Still figuring out what to put here.
              </p>
              <div className="flex gap-2 text-sm text-gray-500 dark:text-gray-500">
                <span>React</span>
                <span>•</span>
                <span>TypeScript</span>
                <span>•</span>
                <span>Tailwind</span>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 opacity-60">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                More projects coming soon
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Currently working on a few things. Check back later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Contact - Keep it simple */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Get in touch
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            Feel free to reach out if you want to collaborate on something, have a question, 
            or just want to say hi.
          </p>

          <a 
            href="mailto:your.email@example.com" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline text-lg font-medium"
          >
            brendanmaska@gmail.com →
          </a>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="mt-32 py-12 px-4 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
            <p>© 2026 Brendan. Built with React.</p>
            <div className="flex gap-6">
              <a href="https://github.com" className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
                GitHub
              </a>
              <a href="https://twitter.com" className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com" className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
