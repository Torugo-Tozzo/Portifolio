import React, { useEffect, useState } from 'react'

const GamepadIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg>
)

export default function TicTacToe(): JSX.Element {
  const [board, setBoard] = useState<(null | 'X' | 'O')[]>(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)
  const [winner, setWinner] = useState<null | 'X' | 'O' | 'Draw'>(null)
  const [gameStatus, setGameStatus] = useState('Sua vez!')

  const calculateWinner = (squares: (null | 'X' | 'O')[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null
  }

  const handleClick = (i: number) => {
    if (winner || board[i] || !isXNext) return

    const newBoard = [...board]
    newBoard[i] = 'X'
    setBoard(newBoard)
    setIsXNext(false)

    const win = calculateWinner(newBoard)
    if (win) {
      setWinner(win as 'X' | 'O')
      setGameStatus(win === 'X' ? 'Você Venceu! 🎉' : 'IA Venceu! 🤖')
      return
    }

    if (!newBoard.includes(null)) {
      setWinner('Draw')
      setGameStatus('Empate! 🤝')
      return
    }

    setGameStatus('Pensando...')
  }

  useEffect(() => {
    if (!isXNext && !winner && board.includes(null)) {
      const timer = setTimeout(() => {
        const emptyIndices = board.map((val, idx) => val === null ? idx : null).filter(v => v !== null) as number[]
        const randomIdx = emptyIndices[Math.floor(Math.random() * emptyIndices.length)]
        const newBoard = [...board]
        newBoard[randomIdx] = 'O'
        setBoard(newBoard)
        setIsXNext(true)

        const win = calculateWinner(newBoard)
        if (win) {
          setWinner(win as 'X' | 'O')
          setGameStatus(win === 'X' ? 'Você Venceu! 🎉' : 'IA Venceu! 🤖')
        } else if (!newBoard.includes(null)) {
          setWinner('Draw')
          setGameStatus('Empate! 🤝')
        } else {
          setGameStatus('Sua vez!')
        }
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [isXNext, board, winner])

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setIsXNext(true)
    setWinner(null)
    setGameStatus('Sua vez!')
  }

  const renderSquare = (i: number) => (
    <button
      key={i}
      onClick={() => handleClick(i)}
      className={`w-20 h-20 md:w-24 md:h-24 bg-white dark:bg-slate-700 rounded-lg shadow-md flex items-center justify-center text-4xl font-bold transition-all hover:scale-105 active:scale-95 ${board[i] === 'X' ? 'text-blue-500' : 'text-red-500'}`}
    >
      {board[i]}
    </button>
  )

  return (
    <section id="game" className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <GamepadIcon /> Desafio do Jogo da Velha
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">Para descontrair! Jogue contra a IA (ela joga de forma aleatória). Tente ganhar!</p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-700">
          <div className="mb-6 text-center">
            <span className={`text-lg font-semibold ${winner === 'X' ? 'text-green-500' : winner === 'O' ? 'text-red-500' : 'text-gray-700 dark:text-gray-300'}`}>
              {gameStatus}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {[0,1,2,3,4,5,6,7,8].map(renderSquare)}
          </div>

          <button onClick={resetGame} className="w-full py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:opacity-90 transition-opacity">Reiniciar Jogo</button>
        </div>
      </div>
    </section>
  )
}
