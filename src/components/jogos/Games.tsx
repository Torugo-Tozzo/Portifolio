import React, { useState } from 'react'
import TicTacToe from './TicTacToe'
import PedraPapelTesoura from './PedraPapelTesoura'
import CaraCoroa from './CaraCoroa'
import Connect3 from './Connect3'

type GameKey = 'tictactoe' | 'rps' | 'coin' | 'connect3'

const GAMES: { key: GameKey; label: string }[] = [
  { key: 'tictactoe', label: 'Jogo da Velha' },
  { key: 'rps', label: 'Pedra, Papel e Tesoura' },
  { key: 'coin', label: 'Cara ou Coroa' },
  { key: 'connect3', label: 'Connect-3' }
]

export default function Games(): JSX.Element {
  const [selected, setSelected] = useState<GameKey>('tictactoe')

  return (
    <section id="games" className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-center gap-3 mb-8">
          {GAMES.map(g => (
            <button
              key={g.key}
              onClick={() => setSelected(g.key)}
              className={`py-2 px-4 rounded-md font-medium transition ${selected === g.key ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-700 dark:text-gray-300 border border-transparent hover:bg-slate-700/50'}`}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div>
          {selected === 'tictactoe' && <TicTacToe />}
          {selected === 'rps' && <PedraPapelTesoura />}
          {selected === 'coin' && <CaraCoroa />}
          {selected === 'connect3' && <Connect3 />}
        </div>
      </div>
    </section>
  )
}
