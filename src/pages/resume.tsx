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

const Resume: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Navbar />

      {/* Header Section */}
      <AnimatedSection className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Brendan Maska
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
              Full-Stack Developer | Computer Science (Graduating May 2026)
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Woodburn, IN • 📧 brendanmaska@gmail.com • 📞 (260) 888-5586
            </p>
            <div className="flex gap-4 mt-6">
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
                href="https://linkedin.com/in/brendan-maska" 
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                title="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.732-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.045-8.789 0-9.698h3.554v1.374c.425-.654 1.185-1.586 2.882-1.586 2.105 0 3.685 1.377 3.685 4.344v5.566zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.707 0-.951.768-1.708 1.959-1.708 1.19 0 1.914.757 1.939 1.708 0 .948-.749 1.707-1.983 1.707zm1.946 11.019H3.39V9.754h3.893v10.698zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Summary</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Computer Science senior with hands-on experience building full-stack web applications using React, FastAPI, Django, and SQL databases. Proven ability to lead team-based software projects, design RESTful APIs, and deliver working solutions using Agile methodologies. Seeking an entry-level Software Engineer or Full-Stack Developer role.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Technical Skills */}
      <AnimatedSection className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'SQL', 'HTML', 'CSS'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'FastAPI', 'Django', 'REST APIs', 'Git', 'GitHub', 'Axios'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'MySQL', 'SQLite'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Other</h3>
              <div className="flex flex-wrap gap-2">
                {['Pandas', 'Matplotlib', 'Jira', 'Agile/Scrum', 'Microsoft Office'].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-800 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Project Experience */}
      <AnimatedSection className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Project Experience</h2>
          
          <div className="space-y-8">
            {/* Senior Capstone */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                Senior Capstone Project – Team Lead
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">2025 – Present</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Led a 5-person development team in designing and implementing a full-stack web application using React, FastAPI, and PostgreSQL
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Designed and integrated RESTful APIs, coordinating backend services with frontend UI components</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Managed sprint planning, task assignments, and milestones using Jira in an Agile environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Maintained version control and code reviews through GitHub, ensuring stable and collaborative development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Delivered monthly prototype demos to an external project sponsor, incorporating feedback to refine features and usability</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">React</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">FastAPI</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">PostgreSQL</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">GitHub</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                Deployment: <a href="http://35.224.168.157:5173/" className="text-blue-600 dark:text-blue-400 hover:underline">http://35.224.168.157:5173/</a>
              </p>
            </div>

            {/* Software Engineering Project */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                Software Engineering Project – Full-Stack Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">2025</p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Built full-stack web functionality using Django and RESTful APIs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Implemented frontend API communication using Axios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Designed and managed application data using SQLite</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Applied MVC principles and backend validation to ensure data integrity</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">Python</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">Django</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">REST APIs</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">SQLite</span>
              </div>
            </div>

            {/* Data Analytics Project */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                Data Analytics Project – Transportation Safety Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">2025</p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 mb-4">
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Analyzed NHTSA and CAFE regulatory datasets to evaluate trends in vehicle safety and accident rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Identified a correlation between stricter fuel economy standards and increased accident frequency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Performed data cleaning, analysis, and visualization using Pandas and Matplotlib</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 dark:text-blue-400 mr-3">•</span>
                  <span>Presented findings through charts and written technical summaries</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">Python</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">Pandas</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg text-sm font-medium">Matplotlib</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                <a href="https://drive.google.com/drive/folders/1b1NJ-WAcThMPvoAthlTWnbMBazHqF2dG?usp=drive_link" className="text-blue-600 dark:text-blue-400 hover:underline">View Project Details</a>
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Professional Experience */}
      <AnimatedSection className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Professional Experience</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-gray-400 pl-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Store Clerk</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">Meijer, Fort Wayne, IN | 2022 – Present</p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Delivered consistent customer service in a fast-paced environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Managed inventory, restocking, and operational standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Demonstrated reliability, time management, and teamwork transferable to technical roles</span>
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-gray-400 pl-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Music/Visual Staff</h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">Woodlan High School Marching Band, Woodburn, IN | 2022 – Present</p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Instructed students in performance techniques and visual coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Collaborated with staff to plan rehearsals and performance outcomes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-400 mr-3">•</span>
                  <span>Developed leadership, communication, and mentoring skills</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Education & Leadership */}
      <AnimatedSection className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Education</h2>
              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Bachelor of Science in Computer Science</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">Expected Graduation: May 2026</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Leadership</h2>
              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Section Leader</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">Madison Scouts Drum & Bugle Corps | 2022 – 2025</p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3">•</span>
                    <span>Led and mentored section members in a high-performance team environment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-3">•</span>
                    <span>Demonstrated discipline, resilience, accountability, and leadership under pressure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to work together?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            Let's discuss how I can contribute to your team.
          </p>
          <a 
            href="mailto:brendanmaska@gmail.com"
            className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="mt-16 py-12 px-4 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
            <p>© 2026 Brendan. Built with React.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Resume
