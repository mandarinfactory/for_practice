const App = () => {
  return (
    <>
      <img htmlfor="이게 html에서for" className="이게 html에서class" defaultValue="이게 html에서value" src={`${process.env.PUBLIC_URL}/img/odung.png`} alt=""/>
    </>
    /* 
    HTML tag(<></>)를 적는다! --> 일단 먼저 청사진으로 여기다가 적는것! 
    단, return안에는 하나의 element만 가능하다!
    {}는 JS를 코딩할때 꼭 써야한다!
    */
  );
};
export default App;