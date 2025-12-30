import React, { useState } from 'react'

const GamepadIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg>
)

type CoinSide = 'cara' | 'coroa'

export default function CaraCoroa(): JSX.Element {
  const [userPick, setUserPick] = useState<CoinSide | null>(null)
  const [outcome, setOutcome] = useState<CoinSide | null>(null)
  const [isFlipping, setIsFlipping] = useState(false)
  const [isSelecting, setIsSelecting] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const flipCoin = () => {
    if (!userPick || isFlipping) return
    setIsFlipping(true)
    setOutcome(null)
    setResult(null)

    // simulate flip duration -> match animation duration below (1.2s)
    const chosen = Math.random() < 0.5 ? 'cara' : 'coroa'
    setTimeout(() => {
      setOutcome(chosen)
      if (chosen === userPick) setResult('Você venceu')
      else setResult('Computador venceu')
      setIsFlipping(false)
    }, 1200)
  }

  const handlePick = (side: CoinSide) => {
    if (isFlipping) return
    setUserPick(side)
    // clear previous outcome/result so coin immediately reflects new selection
    setOutcome(null)
    setResult(null)
    setIsSelecting(true)
    // short 'viradinha' animation duration -> keep in sync with CSS (500ms)
    setTimeout(() => setIsSelecting(false), 500)
  }

  const reset = () => {
    setUserPick(null)
    setOutcome(null)
    setResult(null)
    setIsFlipping(false)
  }

  const resultClass = result === 'Você venceu' ? 'text-green-500' : result === 'Computador venceu' ? 'text-red-500' : 'text-white'

  return (
    <section id="coin" className="py-12 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <GamepadIcon /> Cara ou Coroa
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">Escolha Cara ou Coroa e clique em <strong>Girar</strong> para ver o resultado.</p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-slate-700 text-center">
          {/* coin container + inline keyframes for flip animation */}
          <style>{`
            .coin-wrap { perspective: 1000px; }
            .animate-spin-slow { animation: coinSpin 1.2s cubic-bezier(.2,.8,.2,1); }
            @keyframes coinSpin {
              0% { transform: rotateY(0); }
              25% { transform: rotateY(540deg); }
              50% { transform: rotateY(1080deg); }
              100% { transform: rotateY(1440deg); }
            }

            /* select 'viradinha' animation: quick full-rotation on Z for a playful turn */
            .animate-select-turn { animation: selectTurn 500ms cubic-bezier(.2,.8,.2,1); }
            @keyframes selectTurn {
              0% { transform: rotateZ(0) scale(1); }
              50% { transform: rotateZ(360deg) scale(1.06); }
              100% { transform: rotateZ(0) scale(1); }
            }
          `}</style>

          <div className="flex flex-col items-center gap-6">
            <div className="coin-wrap">
              {/* Single-face approach: show selected emoji immediately, animate during flip, then reveal outcome emoji */}
              <div className={`relative flex items-center justify-center rounded-full w-32 h-32 text-5xl ${isFlipping ? 'animate-spin-slow' : ''} ${isSelecting ? 'animate-select-turn' : ''}`}>
                {/* gold gradient: left lighter, right darker + subtle ring and shadow */}
                <div className="absolute inset-0 rounded-full border border-amber-300 shadow-lg bg-gradient-to-r from-yellow-50 via-yellow-200 to-yellow-400 dark:from-amber-600 dark:via-amber-700 dark:to-amber-800"></div>
                {/* content */}
                <div className="relative z-10">
                  {(() => {
                    const EMOJI: Record<CoinSide, string> = { cara: '🙂', coroa: '👑' }
                    if (isFlipping) return '🪙'
                    if (outcome) return EMOJI[outcome]
                    if (userPick) return EMOJI[userPick]
                    return '🪙'
                  })()}
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-center justify-center">
              <button onClick={() => handlePick('cara')} disabled={isFlipping} className={`py-2 px-4 rounded-md ${userPick === 'cara' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-slate-700'}`}>Cara</button>
              <button onClick={() => handlePick('coroa')} disabled={isFlipping} className={`py-2 px-4 rounded-md ${userPick === 'coroa' ? 'bg-blue-600 text-white' : 'bg-gray-100 dark:bg-slate-700'}`}>Coroa</button>
            </div>

            <div>
              <button
                onClick={flipCoin}
                disabled={!userPick || isFlipping}
                className={`py-2 px-6 rounded-md font-semibold ${!userPick || isFlipping ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-green-600 text-white hover:opacity-90'}`}
              >
                Girar
              </button>
            </div>

            {result && (
              <div className="space-y-2">
                <div className={`text-xl font-bold ${resultClass}`}>{result}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Resultado: {outcome}</div>
                <div>
                  <button onClick={reset} className="py-2 px-4 bg-blue-600 text-white rounded-md">Jogar novamente</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
