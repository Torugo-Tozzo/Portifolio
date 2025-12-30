import React, { useState } from 'react'

type FormState = {
  name: string
  email: string
  message: string
}

const MailIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
)

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
)

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
)

export default function Contact(): JSX.Element {
  const [formState, setFormState] = useState<FormState>({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  // Formspree form ID (from your Formspree account)
  const FORMSPREE_FORM_ID = 'mbdjvwoe'
  const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const form = e.target as HTMLFormElement
      const data = new FormData(form)
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      })
      if (res.ok) {
        setStatus('success')
        setFormState({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 4000)
      } else {
        // non-OK response
        console.error('Formspree error', res.status)
        setStatus('idle')
        alert('Erro ao enviar mensagem. Verifique seu Formspree ID e CORS.')
      }
    } catch (err) {
      console.error(err)
      setStatus('idle')
      alert('Erro ao enviar mensagem. Verifique sua conexão.')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="bg-blue-600 p-10 text-white md:w-1/3 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Vamos conversar?</h3>
              <p className="text-sm opacity-90">Estou aberto a oportunidades e projetos freelance. Envie uma mensagem!</p>
            </div>

            <div className="mt-6">
              <p className="mt-3 text-sm opacity-90">Também me encontre nas redes:</p>
              <div className="flex gap-4 mt-3">
                <a href="https://github.com/Torugo-Tozzo" target="_blank" rel="noreferrer" className="hover:opacity-90"><GithubIcon /></a>
                <a href="https://www.linkedin.com/in/victor-hugo-tozzo/" target="_blank" rel="noreferrer" className="hover:opacity-90"><LinkedinIcon /></a>
              </div>
            </div>

            <div className="mt-6 text-sm opacity-90">© {new Date().getFullYear()} Victor Hugo Tozzo</div>
          </div>

          <div className="p-10 md:w-2/3">
            <h4 className="text-xl font-semibold mb-4">Envie uma mensagem</h4>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="name" value={formState.name} onChange={handleChange} required placeholder="Nome" className="px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-700" />
                <input name="email" value={formState.email} onChange={handleChange} required type="email" placeholder="Email" className="px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-700" />
              </div>

              <textarea name="message" value={formState.message} onChange={handleChange} rows={6} required placeholder="Mensagem" className="px-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-700"></textarea>

              <div className="flex items-center gap-4">
                <button type="submit" disabled={status === 'loading'} className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  {status === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
                </button>

                {status === 'success' && (
                  <span className="text-green-600 dark:text-green-400 font-medium">Mensagem enviada com sucesso!</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
