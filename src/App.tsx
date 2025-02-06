import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900"></div>
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <br />
        <div className="relative z-10 max-w-4xl mx-auto px-2 text-center">
          <h1 className="text-2xl md:text-7xl font-bold mb-2 pb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Sangeeth
          </h1>

          
          <p className="text-xl md:text-2xl text-gray-300 mb-5">
            u i i ai o  uu  ii a i
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/sangeeth-606" className="hover:text-purple-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="www.linkedin.com/in/sangeeth-m-883a4020a" className="hover:text-purple-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          {/* <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-medium transition-colors">
            View My Work
          </button> */}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </div>

      {/* About Section */}
      {/* <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
                alt="Profile"
                className="relative rounded-lg w-full"
              />
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                I'm a passionate Full Stack Developer with 5 years of experience
                crafting beautiful and functional web applications. I specialize
                in React, Node.js, and modern web technologies.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "TypeScript",
                  "Node.js",
                  "Tailwind CSS",
                  "MongoDB",
                  "AWS",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="pt-4">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  View Resume <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Featured Projects Preview */}
      {/* <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((project) => (
              <div
                key={project}
                className="group relative overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 z-10"></div>
                <img
                  src={`https://images.unsplash.com/photo-167${project}586234-45bce341b64e?auto=format&fit=crop&q=80`}
                  alt={`Project ${project}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-bold mb-2">
                    Project Title {project}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    React • Node.js • MongoDB
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default App;
