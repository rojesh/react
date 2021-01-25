import {useState, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const GAME_DURATION = 5
  const [ text, setText ] = useState("")
  const [ timeRemaining, setTimeRemaining ] = useState(GAME_DURATION)
  const [ isTimeRunning, setisTimeRunning ] = useState(false)
  const [ wordCount, setWordCount ] = useState(0)
  const textAreaRef = useRef(null)

  function handleChange(e){
    setText(e.target.value)
  }

  function calculateWordCount(text){
    const wordsArr = text.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  function endGame(){
    const numWords = calculateWordCount(text)
    setWordCount(numWords)
    setisTimeRunning(false)
  }

  useEffect(() => {
    if(timeRemaining > 0 && isTimeRunning) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1 )
      }, 1000)
    } else if(timeRemaining === 0){
      endGame()
    }
  }, [timeRemaining, isTimeRunning])

  function startGame(){
    setText("")
    setisTimeRunning(true)
    setTimeRemaining(GAME_DURATION)
    textAreaRef.current.disabled = false
    textAreaRef.current.focus()
  }

  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea 
        ref={textAreaRef}
        disabled={!isTimeRunning}
        name="text"
        value={text}
        onChange={handleChange}
      />
      <h4> Time Remaining: {timeRemaining}</h4>
      <button disabled={isTimeRunning} onClick={() => startGame()}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
