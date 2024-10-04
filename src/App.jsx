import Board from './components/Board';

function App() {
  return (
    <>
      <h1>Player One</h1>
      <Board />
      <input type='range' min={2} max={9} value={3} />
    </>
  );
}

export default App;
