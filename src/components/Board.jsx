import Field from './Field';

const Board = () => {
  return (
    <div className='board' style={{ gridTemplateColumns: `repeat(3, 1fr)` }}>
      {Array.from({ length: 3 * 3 }).map((_, i) => (
        <Field key={i} />
      ))}
    </div>
  );
};

export default Board;
