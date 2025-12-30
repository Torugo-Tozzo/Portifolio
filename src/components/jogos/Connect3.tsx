import React, { useState } from 'react'

type Cell = null | 'R' | 'Y'

const COLS = 6
const ROWS = 5

function createBoard(): Cell[][] {
  return Array.from({ length: ROWS }, () => Array.from({ length: COLS }, () => null))
}

function checkWin(board: Cell[][], r: number, c: number, player: Cell): boolean {
  if (!player) return false
  const dirs = [
    [0,1], [1,0], [1,1], [1,-1]
  ]
  for (const [dr, dc] of dirs) {
    let count = 1
    // forward
    for (let k=1;k<3;k++){
      const nr = r + dr*k, nc = c + dc*k
      if (nr<0||nr>=ROWS||nc<0||nc>=COLS) break
      if (board[nr][nc] === player) count++
      else break
    }
    // backward
    for (let k=1;k<3;k++){
      const nr = r - dr*k, nc = c - dc*k
      if (nr<0||nr>=ROWS||nc<0||nc>=COLS) break
      if (board[nr][nc] === player) count++
      else break
    }
    if (count >= 3) return true
  }
  return false
}

export default function Connect3(): JSX.Element {
  const [board, setBoard] = useState<Cell[][]>(() => createBoard())
  const [current, setCurrent] = useState<Cell>('R')
  const [winner, setWinner] = useState<Cell | 'T' | null>(null)

  const reset = () => {
    setBoard(createBoard())
    setCurrent('R')
    setWinner(null)
  }

  const [isAiThinking, setIsAiThinking] = useState(false)
  const [aiTarget, setAiTarget] = useState<number | null>(null)
  const [aiAnimating, setAiAnimating] = useState(false)

  // helper: attempt to place a piece for `player` in `col`. Returns placed row or -1 if full
  const placePiece = (boardState: Cell[][], col: number, player: Cell): { board: Cell[][]; row: number } | null => {
    const newBoard = boardState.map(r => r.slice())
    for (let row = ROWS - 1; row >= 0; row--) {
      if (!newBoard[row][col]) {
        newBoard[row][col] = player
        return { board: newBoard, row }
      }
    }
    return null
  }

  // user's action: drop in column and then trigger AI response (if game still running)
  const dropInCol = (col: number) => {
    if (winner) return

    // user plays as 'R'
    const placed = placePiece(board, col, 'R')
    if (!placed) return // column full
    let nextBoard = placed.board
    setBoard(nextBoard)
    if (checkWin(nextBoard, placed.row, col, 'R')) {
      setWinner('R')
      return
    }
    // check draw
    if (nextBoard.every(r => r.every(cell => cell !== null))) {
      setWinner('T')
      return
    }

    // AI move: pick a random available column (exclude full columns)
    const available: number[] = []
    for (let c = 0; c < COLS; c++) if (nextBoard[0][c] === null) available.push(c)
    if (available.length === 0) return
    const aiCol = available[Math.floor(Math.random() * available.length)]

    // simulate thinking and play animation before placing the AI piece
    setIsAiThinking(true)
    setAiTarget(aiCol)
    // thinking delay
    setTimeout(() => {
      setAiAnimating(true)
      // animation duration then place
      setTimeout(() => {
        const aiPlaced = placePiece(nextBoard, aiCol, 'Y')
        if (aiPlaced) {
          nextBoard = aiPlaced.board
          setBoard(nextBoard)
          if (checkWin(nextBoard, aiPlaced.row, aiCol, 'Y')) {
            setWinner('Y')
          } else if (nextBoard.every(r => r.every(cell => cell !== null))) {
            setWinner('T')
          }
        }
        setIsAiThinking(false)
        setAiAnimating(false)
        setAiTarget(null)
        // after AI, it's user's turn again
        setCurrent('R')
      }, 450)
    }, 650)
  }

  // map internal tokens to displayed emojis: 'R' is player (blue), 'Y' is AI (red)
  const pieceEmoji = (p: Cell) => (p === 'R' ? '🔵' : p === 'Y' ? '🔴' : '⚪️')

  return (
    <section id="connect3" className="py-8 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold">Connect-3</h3>
          <p className="text-gray-600 dark:text-gray-400">Clique na coluna para soltar sua peça. Faça 3 em linha para vencer.</p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md text-center flex flex-col items-center border border-white/80">
          <div className="grid grid-cols-6 gap-2 mb-3 mx-auto justify-center">
            {Array.from({ length: COLS }).map((_, i) => (
              <button
                key={i}
                onClick={() => dropInCol(i)}
                disabled={!!winner || board[0][i] !== null || isAiThinking}
                aria-label={`Drop column ${i + 1}`}
                className={`flex items-center justify-center w-12 h-10 rounded ${board[0][i] !== null || winner ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:opacity-90'} ${aiAnimating && aiTarget === i ? 'ring-2 ring-red-500 animate-bounce' : ''}`}
              >
                {/* down arrow */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
            ))}
          </div>

          <div className="p-3 rounded-lg border border-white/60 shadow-sm bg-white/5 dark:bg-slate-900/30">
            <div className="grid grid-rows-5 grid-cols-6 gap-2 mx-auto">
              {board.map((row, rIdx) => row.map((cell, cIdx) => (
                <div key={`${rIdx}-${cIdx}`} className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center border">
                  <span className="text-2xl -ml-1">{pieceEmoji(cell)}</span>
                </div>
              )))}
            </div>
          </div>

          <div className="mt-4">
            {winner === 'T' ? (
              <div className="text-lg font-bold">Empate!</div>
            ) : winner ? (
              <div className="text-lg font-bold">Vencedor: {winner === 'R' ? '🔵' : '🔴'}</div>
            ) : null}
          </div>

          <div className="mt-4">
            <button onClick={reset} className="py-2 px-4 bg-blue-600 text-white rounded-md">Reiniciar</button>
          </div>
        </div>
      </div>
    </section>
  )
}
