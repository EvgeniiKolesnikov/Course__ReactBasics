// const Car = () => {
//   return (
//     <h2>Car component</h2>
//   )
// }

const Car = (props) => (
  <div
    style={{
      border: '2px solid #999',
      borderRadius: '5px',
      boxShadow: '2px 2px 1px #ddd',
      margin: '5px',
      display: 'inline-block',
      padding: '5px',
      width: '120px',
    }}
  >
    <div>{props.name}</div>
    <div>{props.year}</div>
    <input
      type='text'
      style={{ width: '50px' }}
      onChange={props.onChangeName}
      value={props.name}
    />
    {/* <button onClick={props.onChangeTitle}>Click</button> */}
    <button onClick={props.onDelete}>Delete</button>
    {props.children}
  </div>
);

export default Car;

// export default () => (
//   <h2>Car component</h2>
// );
