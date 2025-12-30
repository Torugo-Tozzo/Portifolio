import React from 'react'

const GithubSVG = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
)

const LinkedinSVG = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
)

const InstagramSVG = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
)

export default function Hero(): JSX.Element {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left order-2 md:order-1">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-semibold mb-2">Fullstack Developer</span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Olá, sou <br />
            <span className="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">Victor Hugo Tozzo Filho</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
            Desenvolvedor Fullstack Júnior na <span className="font-semibold text-blue-500">Unidesk Tecnologia</span>.
            Focado em criar soluções web e mobile eficientes com tecnologias modernas.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/30">Ver Projetos</a>
            <a href="#contact" className="px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-semibold transition-all flex items-center gap-2">Contato</a>
          </div>

          <div className="flex gap-6 justify-center md:justify-start pt-4">
            <a href="https://github.com/Torugo-Tozzo" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors"><GithubSVG /></a>
            <a href="https://www.linkedin.com/in/victor-hugo-tozzo/" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors"><LinkedinSVG /></a>
            <a href="https://instagram.com/torugo_tozzo" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition-colors"><InstagramSVG /></a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-teal-400 rounded-full animate-spin-slow blur opacity-20"></div>
            <img src="https://avatars.githubusercontent.com/u/114814350?v=4" alt="Victor Hugo" className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
