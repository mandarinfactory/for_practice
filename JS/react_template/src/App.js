const App = () => {
  return (
    <>
      <h1>더하기 빼기!</h1>
      <hr />
      <h2>더하기</h2>
      <form>
        <span></span>
        +
        <span></span>
        =
        <input type="text" size="1" />
      </form>
      <hr />
      <h2>빼기</h2>
      <form>
      </form>
      <p className="output">결과</p>
    </>
  );
};
export default App;