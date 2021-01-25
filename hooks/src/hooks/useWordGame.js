import {useState, useEffect, useRef} from 'react';

function useWordGame(defaultGameTime = 10){
    const [ text, setText ] = useState("")
    const [ timeRemaining, setTimeRemaining ] = useState(defaultGameTime)
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
      setTimeRemaining(defaultGameTime)
      textAreaRef.current.disabled = false
      textAreaRef.current.focus()
    }

    return {textAreaRef, handleChange, text, isTimeRunning, timeRemaining, startGame, wordCount}
}

export default useWordGame
