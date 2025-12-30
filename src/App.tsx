import React from 'react'
import Header from './components/Header'
import Hero from './components/inicio/Hero'
import Contact from './components/contato/Contact'
import Games from './components/jogos/Games'
import Projects from './components/projetos/Projects'
import About from './components/sobre/About'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="app min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-12">

        {/* Migrated components */}
        <Hero />
        <About />
        <Projects />
        <Games />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
