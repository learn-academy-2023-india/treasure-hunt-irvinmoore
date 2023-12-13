import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "🔑",
    "🔑",
    "🔑",
    "🔑",
    "🔑",
    "🔑",
    "🔑",
    "🔑",
    "🔑"
  ])


  const handleClick = (id) => {
      let treasureLocation = Math.floor(Math.random() * board.length)
      //let treasureLocation = Math.floor(Math.random() * 9)
      let bombLocation = Math.floor(Math.random() * board.length)
      //let bombLocation = Math.floor(Math.random() * 9)
      
      if(treasureLocation === id) {
        board[id] = "🤢"
        setBoard([...board])
  
      }else if (bombLocation === treasureLocation || bombLocation === id) {
        board[id] = "🦨"
        setBoard([...board])

      }else {
        board[id] = "🎁"
        setBoard([...board])
      }
    }
  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <footer>By: Irvin Moore</footer>
      <h2>To Restart Game, Reload Page! ☝🏾 👌🏾 🫶🏾</h2>
      <Square board={board} handleClick={handleClick}/>
    </>
  )

}
export default App
