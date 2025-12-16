import React from 'react'
import { Github, Linkedin, Mail, Instagram, Facebook, ChevronRight, Sparkles } from "lucide-react"


import './App.css'

function App() {
const name = "Ashish Chandra Paudel"
  const profileImage = "../public/asis_pic.jpg"

  const interests = [
    "Full-Stack Web Development",
    "REST APIs & Real-time Applications",
    "MongoDB Database Architecture",
    "React Component Design Systems",
    "Node.js Backend Optimization",
    "Cloud & DevOps Solutions",
  ]

  const skills = {
    Frontend: ["React.js", "Next.js", "Tailwind CSS", "Redux", "JavaScript", "TypeScript"],
    Backend: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "Middleware"],
    Database: ["MongoDB", "Mongoose", "Database Optimization", "Aggregations"],
    Tools: ["Git", "Docker", "Vercel", "Postman", "VS Code"],
  }

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-cyan-400" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Mail, href: "mailto:your@email.com", label: "Email", color: "hover:text-pink-400" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-purple-400" },
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-indigo-400" },
  ]
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-5 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-32 right-5 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-56 h-56 md:w-80 md:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/50 py-3 md:py-4 px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {name.split(" ")[0][0]}
            {name.split(" ")[1]?.[0] || ""}
          </div>
          <div className="flex gap-3 md:gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className={`text-slate-400 transition-all duration-300 ${link.color} hover:scale-110 transform`}
                >
                  <Icon size={18} className="md:hidden" />
                  <Icon size={20} className="hidden md:block" />
                </a>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 z-10 text-center md:text-left">
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-2 md:gap-3 justify-center md:justify-start">
                <Sparkles className="text-cyan-400" size={20} />
                <span className="text-cyan-400 font-semibold text-xs md:text-sm tracking-widest uppercase">
                  Welcome to my portfolio
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {name}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-semibold">MERN Stack Developer</p>
            </div>

            <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              I craft beautiful, scalable web applications using React, Node.js, Express, and MongoDB. Passionate about
              building seamless user experiences and robust backend architectures.
            </p>

            <div className="flex gap-3 md:gap-4 flex-wrap pt-4 justify-center md:justify-start">
              <button className="px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm md:text-base font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 transform">
                View My Work
              </button>
              <button className="px-6 md:px-8 py-2.5 md:py-3 border-2 border-slate-600 text-slate-300 text-sm md:text-base font-semibold rounded-lg hover:bg-slate-800/50 hover:border-cyan-400 transition-all duration-300">
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="relative z-10 flex justify-center order-first md:order-last">
            <div className="relative w-full max-w-xs md:max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-50 animate-pulse"></div>
              <img
                src={profileImage || "/placeholder.svg"}
                alt={name}
                className="relative w-full rounded-2xl shadow-2xl object-cover border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className="relative py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              My Interests
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {interests.map((interest, idx) => (
              <div
                key={idx}
                className="group p-5 md:p-6 rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <ChevronRight
                    className="text-cyan-400 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-slate-200 font-semibold text-base md:text-lg group-hover:text-cyan-300 transition-colors duration-300">
                    {interest}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {Object.entries(skills).map(([category, techs]) => (
              <div
                key={category}
                className="group p-5 md:p-6 rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
              >
                <h3 className="text-lg md:text-xl font-bold text-cyan-400 mb-3 md:mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {techs.map((tech, idx) => (
                    <li
                      key={idx}
                      className="text-slate-300 text-xs md:text-sm hover:text-cyan-300 transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:bg-blue-400 transition-colors duration-300 flex-shrink-0"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-slate-300 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a
                href="mailto:your@email.com"
                className="px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm md:text-base font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 transform"
              >
                Send Me an Email
              </a>
              <a
                href="#"
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-slate-600 text-slate-300 text-sm md:text-base font-semibold rounded-lg hover:bg-slate-700/50 hover:border-cyan-400 transition-all duration-300"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 md:py-12 px-4 md:px-6 border-t border-slate-800/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-cyan-400 mb-3 md:mb-4">About</h3>
              <p className="text-slate-400 text-sm">
                {name} is a passionate MERN developer creating innovative web solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-cyan-400 mb-3 md:mb-4">Quick Links</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-lg md:text-xl font-bold text-cyan-400 mb-3 md:mb-4">Connect</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      aria-label={link.label}
                      className={`text-slate-400 transition-all duration-300 ${link.color} hover:scale-125 transform`}
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="pt-6 md:pt-8 border-t border-slate-800/50 text-center text-slate-500 text-xs md:text-sm">
            <p>&copy; 2025 {name}. All rights reserved. Built with React & Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App
