import { useState } from 'react';

const Field = ({ setPlayer, player }) => {
  const [currPlayer, setCurrPlayer] = useState(null);

  const handleClick = () => {
    setCurrPlayer(player ? 'player-1' : 'player-2');
    setPlayer((vorherigerState) => !vorherigerState);
  };

  return <div className={`field pointer ${currPlayer}`} onClick={handleClick}></div>;
};

export default Field;
