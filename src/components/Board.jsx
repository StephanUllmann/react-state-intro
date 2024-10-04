import Field from './Field';

// const Board = (wasDuWillst) => {
const Board = ({ setPlayer, player }) => {
  // const array = ['Mickey', 'Donald', 'Goofey', 'Dagobert', 'Mickey'];
  // console.log(wasDuWillst);
  // const { setPlayer, player } = wasDuWillst;

  // const myObject = {
  //   city: 'Leipzig',
  //   plz: '04637',
  //   weather: 'rainy',
  // };

  // // myObject.plz
  // const { weather } = myObject;

  // console.log(weather);

  return (
    <div className='board' style={{ gridTemplateColumns: `repeat(3, 1fr)` }}>
      {Array.from({ length: 3 * 3 }).map((_, i) => (
        <Field key={i} setPlayer={setPlayer} player={player} />
      ))}
      {/* {array.map((e, index) => (
        <p key={e + index}>{e}</p>
      ))} */}
    </div>
  );
};

export default Board;
