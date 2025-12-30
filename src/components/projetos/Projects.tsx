import React from 'react'

type Project = {
  id: number
  title: string
  description: string
  link: string
  tags: string[]
}

const projects: Project[] = [
  { id: 1, title: 'Conversor de Videos', description: 'Aplicação web para conversão e download de vídeos do YouTube a partir de suas respectivas URLs.', link: 'https://github.com/Torugo-Tozzo/Conversor_de_Videos', tags: ['Web', 'Download', 'Automation'] },
  { id: 2, title: 'Uaihoo', description: 'Buscador de documentos para matéria de introdução ao Elastic Search. Feito em colaboração com @Lucas Justino.', link: 'https://github.com/Torugo-Tozzo/Uaihoo', tags: ['Search', 'Elastic Search', 'Collab'] },
  { id: 3, title: 'PDI to ASCII', description: 'Trabalho da matéria de processamento de imagem que consistia em transformar imagens em formato .pgm para ASCII.', link: 'https://github.com/Torugo-Tozzo/Trabalho1_PDI', tags: ['Image Processing', 'Algorithm', 'Python'] },
  { id: 4, title: 'TozzoBurger (Mobile)', description: 'Aplicativo Mobile feito em React-Native + Expo para fazer a gestão de vendas da lanchonete dos meus pais.', link: 'https://github.com/Torugo-Tozzo/TozzoBurger', tags: ['Mobile', 'React Native', 'Expo'] },
  { id: 5, title: 'Emater-App (TCC)', description: 'Aplicativo móvel para calcular o VRA e ajudar na tomada de decisão do produtor rural.', link: 'https://github.com/Torugo-Tozzo/Emater-App', tags: ['Mobile', 'Agriculture', 'TCC'] },
  { id: 6, title: 'TozzoBurger Fullstack', description: 'Aplicação fullstack em desenvolvimento (App mobile + API com pagamentos via Stripe + Frontend usando Bun e Vite!).', link: 'https://github.com/Torugo-Tozzo/TozzoBurger', tags: ['Fullstack', 'Bun', 'Vite', 'Stripe', 'Dev'] }
]

const ExternalLinkIcon = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
)

const CodeIcon = ({ size = 48 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
)

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-slate-700 flex flex-col h-full">
      <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <CodeIcon />
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-200">{tag}</span>
          ))}
        </div>

        <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:opacity-90 transition-opacity">
          Ver no GitHub <ExternalLinkIcon />
        </a>
      </div>
    </div>
  )
}

export default function Projects(): JSX.Element {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projetos Recentes</h2>
          <p className="text-gray-600 dark:text-gray-400">Alguns dos meus trabalhos acadêmicos e pessoais.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
