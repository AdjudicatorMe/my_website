import React from 'react'
import Navbar from '../components/Navbar'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = '', id }) => {
  const { elementRef, isVisible } = useScrollAnimation()
  
  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      id={id}
      className={`transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </section>
  )
}

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section - More casual, less structured */}
      <AnimatedSection className="relative pt-20 pb-16 px-4">
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
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">Hey there,</p>
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

            <div className="flex gap-4 pt-2">
              <a 
                href="https://github.com/AdjudicatorMe" 
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                title="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/brendan-maska-aba648358" 
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                title="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.732-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.045-8.789 0-9.698h3.554v1.374c.425-.654 1.185-1.586 2.882-1.586 2.105 0 3.685 1.377 3.685 4.344v5.566zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.707 0-.951.768-1.708 1.959-1.708 1.19 0 1.914.757 1.939 1.708 0 .948-.749 1.707-1.983 1.707zm1.946 11.019H3.39V9.754h3.893v10.698zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
            </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* What I'm working with - Less grid, more organic */}
      <AnimatedSection className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            What I work with
          </h2>
          
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              Java
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              Python
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              JavaScript
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              TypeScript
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              C / C++
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              SQL
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              HTML / CSS
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              React
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              FastAPI
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              Django
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              REST APIs
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              Axios
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              PostgreSQL
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              MySQL
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              SQLite
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              Pandas
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              Matplotlib
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              Git / GitHub
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              Jira
            </span>
            <span className="px-4 py-2 text-sm bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800">
              Agile / Scrum
            </span>
          </div>
        </div>
      </AnimatedSection>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* About - Simple and direct */}
      <AnimatedSection id="about" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              A bit about me
            </h2>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a Computer Science student at <strong>graduating May 2026</strong>, with hands-on experience building full-stack web applications. My journey started with customizing MySpace pages, and it evolved into a passion for creating accessible, user-friendly applications.
              </p>
              
              <p>
                My focus is on full-stack development with <strong>React, Python (FastAPI/Django), and SQL databases</strong>. I've led cross-functional teams, designed REST APIs, and delivered working solutions using Agile methodologies. I'm particularly interested in solving real-world problems with clean, maintainable code.
              </p>

              <p>
                When I'm not coding, you'll find me reading, making coffee, or exploring new technologies. I'm actively seeking entry-level Software Engineer or Full-Stack Developer roles where I can contribute my skills and continue learning from experienced developers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">Languages</p>
                <p className="text-sm text-gray-900 dark:text-white">Java, Python, JavaScript, TypeScript, C, C++</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">Frameworks</p>
                <p className="text-sm text-gray-900 dark:text-white">React, FastAPI, Django, REST APIs</p>
              </div>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium">Databases</p>
                <p className="text-sm text-gray-900 dark:text-white">PostgreSQL, MySQL, SQLite</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Projects teaser - Minimal */}
      <AnimatedSection id="features" className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Recent Projects
          </h2>
          
          <div className="space-y-6">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Senior Capstone – Full-Stack Web App
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Led a 5-person team to build a full-stack application with React, FastAPI, and PostgreSQL. Managed Agile sprints, designed REST APIs, and delivered monthly prototypes to external sponsors.
              </p>
              <div className="flex gap-2 text-sm text-gray-500 dark:text-gray-500 mb-4">
                <span>React</span>
                <span>•</span>
                <span>FastAPI</span>
                <span>•</span>
                <span>PostgreSQL</span>
                <span>•</span>
                <span>Team Leadership</span>
              </div>
              <a href="http://35.224.168.157:5173/" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                View Live App →
              </a>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Software Engineering Project
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Built a full-stack web application using Django, REST APIs, and SQLite. Implemented frontend API communication with Axios and applied MVC principles for data integrity.
              </p>
              <div className="flex gap-2 text-sm text-gray-500 dark:text-gray-500 mb-4">
                <span>Python</span>
                <span>•</span>
                <span>Django</span>
                <span>•</span>
                <span>REST APIs</span>
                <span>•</span>
                <span>SQLite</span>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Data Analytics – Transportation Safety
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Analyzed NHTSA datasets to identify trends in vehicle safety and accident rates. Discovered correlation between stricter standards and accident frequency using Pandas and Matplotlib.
              </p>
              <div className="flex gap-2 text-sm text-gray-500 dark:text-gray-500 mb-4">
                <span>Python</span>
                <span>•</span>
                <span>Pandas</span>
                <span>•</span>
                <span>Data Analysis</span>
              </div>
              <a href="https://drive.google.com/drive/folders/1b1NJ-WAcThMPvoAthlTWnbMBazHqF2dG?usp=drive_link" className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
                View Project Details →
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Want to learn more about my experience and skills?
            </p>
            <a 
              href="#resume"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              View Full Resume →
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Contact - Keep it simple */}
      <AnimatedSection id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Get in touch
          </h2>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            I'm actively seeking Software Engineer or Full-Stack Developer positions. Feel free to reach out if you'd like to discuss opportunities, have questions, or just want to chat about development.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">EMAIL</p>
              <a 
                href="mailto:brendanmaska@gmail.com" 
                className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                brendanmaska@gmail.com
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">PHONE</p>
              <a 
                href="tel:2608885586" 
                className="text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline"
              >
                (260) 888-5586
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">LOCATION</p>
              <p className="text-lg font-medium text-gray-900 dark:text-white">Woodburn, IN</p>
            </div>
          </div>

          
          
        </div>
      </AnimatedSection>

      {/* Footer - Minimal */}
      <footer className="mt-32 py-12 px-4 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
            <p>© 2026 Brendan. Built with React.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
