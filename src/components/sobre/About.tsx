import React from 'react'

const CpuIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
)

const CodeIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
)

const skills = [
  '.NET', 'C#', 'SQL', 'React Native', 'Git', 'Bun', 'Vite', 'HTML5', 'CSS3'
]

export default function About(): JSX.Element {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Sobre Mim & Formação</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-slate-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-300">
                <CpuIcon />
              </div>
              <h3 className="text-xl font-bold">Experiência</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">Dev Fullstack Jr.</h4>
                <p className="text-blue-500 text-sm mb-1">Unidesk Tecnologia</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Atuando no desenvolvimento de soluções robustas. Utilizando o stack <strong>.NET, C#, SQL</strong> no backend, e tecnologias web como <strong>HTML, CSS, JS, jQuery e Bootstrap</strong> no frontend.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-slate-700">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-lg text-emerald-600 dark:text-emerald-300">
                <CodeIcon />
              </div>
              <h3 className="text-xl font-bold">Formação</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">Ciência da Computação</h4>
                <p className="text-emerald-500 text-sm mb-1">Universidade Federal de Alfenas (UNIFAL-MG)</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Previsão de conclusão: Início de 2026.</p>
              </div>

              <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                <h5 className="font-semibold mb-2">Habilidades & Ferramentas</h5>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-gray-100 dark:bg-slate-700 rounded-full text-xs font-medium">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
