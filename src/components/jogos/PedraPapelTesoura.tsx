import React, { useState } from 'react'

const GamepadIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg>
)

type ChoiceKey = 'pedra' | 'papel' | 'tesoura'

const CHOICES: { key: ChoiceKey; label: string; emoji: string }[] = [
  { key: 'pedra', label: 'Pedra', emoji: '✊' },
  { key: 'papel', label: 'Papel', emoji: '✋' },
  { key: 'tesoura', label: 'Tesoura', emoji: '✌️' }
]

const decide = (user: ChoiceKey, comp: ChoiceKey) => {
  if (user === comp) return 'Empate'
  if (
    (user === 'pedra' && comp === 'tesoura') ||
    (user === 'papel' && comp === 'pedra') ||
    (user === 'tesoura' && comp === 'papel')
  ) return 'Você venceu'
  return 'Computador venceu'
}

export default function PedraPapelTesoura(): JSX.Element {
  const [userChoice, setUserChoice] = useState<ChoiceKey | null>(null)
  const [compChoice, setCompChoice] = useState<ChoiceKey | null>(null)
  const [result, setResult] = useState<string | null>(null)

  // Select only: user chooses an option but action happens when 'Jogar' pressed
  const selectChoice = (choice: ChoiceKey) => {
    setUserChoice(choice)
    // clear previous round result so UI is ready for a new play
    setCompChoice(null)
    setResult(null)
  }

  const playRound = () => {
    if (!userChoice) return
    const comp = CHOICES[Math.floor(Math.random() * CHOICES.length)].key
    setCompChoice(comp)
    const r = decide(userChoice, comp)
    setResult(r)
  }

  const resetRound = () => {
    setUserChoice(null)
    setCompChoice(null)
    setResult(null)
  }

  const resultClass = result === 'Você venceu'
    ? 'text-green-500'
    : result === 'Computador venceu'
      ? 'text-red-500'
      : 'text-white'

  return (
    <section id="rps" className="py-12 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <GamepadIcon /> Pedra, Papel e Tesoura
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">Escolha sua jogada e desafie a IA (aleatória).</p>
        </div>


        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700">
          <div className="flex flex-col items-center gap-4 mb-6" />

          <div className="text-center">
            {/* Bot slot above choices: show 3 options blurred until reveal */}
            <div className="flex flex-col items-center gap-2 mb-4">
              <div className="text-2xl">🤖</div>
              <div className={`${compChoice ? 'opacity-100' : 'blur-sm opacity-80'} flex items-center justify-center gap-3`}> 
                {CHOICES.map(c => (
                  <div
                    key={c.key}
                    className={`w-16 h-16 flex items-center justify-center rounded-md border bg-slate-50 dark:bg-slate-700 text-2xl transition ${compChoice ? (compChoice === c.key ? 'ring-2 ring-blue-400' : 'opacity-40') : ''}`}
                  >
                    {c.emoji}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center">
              {CHOICES.map(c => (
                <button
                  key={c.key}
                  onClick={() => selectChoice(c.key)}
                  disabled={!!result}
                  className={`w-24 h-24 flex flex-col items-center justify-center gap-1 rounded-lg border transition transform hover:scale-105 active:scale-95 ${userChoice === c.key ? 'ring-2 ring-blue-400' : ''} ${result ? 'opacity-60 cursor-not-allowed' : ''} bg-slate-50 dark:bg-slate-700`}
                >
                  <div className="text-3xl">{c.emoji}</div>
                  <div className="text-sm font-medium">{c.label}</div>
                </button>
              ))}
            </div>

            <div className="mt-6 mb-4">
              <button
                onClick={playRound}
                disabled={!userChoice || !!result}
                className={`py-2 px-6 rounded-md font-semibold ${!userChoice || result ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-green-600 text-white hover:opacity-90'}`}
              >
                Jogar
              </button>
            </div>

            {result ? (
              <div className="space-y-4">
                <div className={`text-xl font-bold ${resultClass}`}>{result}</div>
                

                <div className="flex gap-3 justify-center">
                  <button onClick={resetRound} className="py-2 px-4 bg-blue-600 text-white rounded-md">Jogar novamente</button>
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-600 dark:text-gray-300">Escolha uma opção acima e pressione <strong>Jogar</strong>.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}


