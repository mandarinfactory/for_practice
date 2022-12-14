const App = () => {
  /* JS공간! */
  const foo = () => {
    alert();
  }//foo_function
  return (
    <div>
      <input type="number" />
      +
      <input type="number" />
      =
      <button onClick={foo}>결과보기</button>
      <p className="result">그 결과는..?</p>
    </div>
    /* HTML공간! */
  );
};
export default App;