import Board from './components/Board';
import { useState } from 'react';

function App() {
  const [player, setPlayer] = useState(true);

  return (
    <>
      <h1>Player {player ? 'One' : 'Two'}</h1>
      <Board setPlayer={setPlayer} player={player} bla={42} />
      <input type='range' min={2} max={9} />
    </>
  );
}

export default App;
