import useWordGame from './hooks/useWordGame'
import './App.css'

function App() {
  const { textAreaRef,
          handleChange,
          text,
          isTimeRunning,
          timeRemaining,
          startGame,
          wordCount 
        } = useWordGame()
  
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
