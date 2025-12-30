import React, { useEffect, useState } from 'react'

export default function Header(){
  const [isDark, setIsDark] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }

    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setIsDark(true)
    }
  }

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Jogos', href: '#games' },
    { name: 'Contato', href: '#contact' },
  ]

  const Icon = ({ name, size = 20 }: { name: 'Sun'|'Moon', size?: number }) => {
    if (name === 'Sun') return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
    )
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
    )
  }

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">VHTF</a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-blue-500 transition-colors">{link.name}</a>
          ))}
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle theme">
            <Icon name={isDark ? 'Sun' : 'Moon'} />
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} aria-label="Toggle theme">
            <Icon name={isDark ? 'Sun' : 'Moon'} />
          </button>
          <button onClick={() => setIsMobileMenuOpen(v => !v)} className="p-2" aria-label="Open menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg border-t border-gray-200 dark:border-slate-800 py-4 px-6 flex flex-col space-y-4">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-medium hover:text-blue-500">{link.name}</a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
