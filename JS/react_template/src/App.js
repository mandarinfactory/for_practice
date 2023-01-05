import CompCursor from "./components/CompCursor";
import CompHeader from "./components/CompHeader";
import CompVisual from "./components/CompVisual";
import CompSection1 from "./components/CompSection1";
import CompSection2 from "./components/CompSection2";
import CompSection3 from "./components/CompSection3";
import CompSection4 from "./components/CompSection4";
import CompSection5 from "./components/CompSection5";
import CompSection6 from "./components/CompSection6";
import CompStickyContainer from "./components/CompStickyContainer";
import CompSticky from "./components/CompSticky";
import CompStickyInner from "./components/CompStickyInner";
import CompFooter from "./components/CompFooter";
import { useEffect } from "react";



const App = () => {

  useEffect(() => {
    const scriptArr = [
      'common.js', 'cursor.js', 'layout.js', 'header.js'
    ]//scriptArr

    scriptArr.forEach(v => {
      const script = document.createElement('script')
      script.src = `${process.env.PUBLIC_URL}/JS/${v}`;
      script.defer = true;
      document.body.appendChild(script);
    })//forEach


  }, [])//useEffect  --> helmet 안쓰고 하려면 일일히 따로 변수 선언해서 해아함!
  return (
    <>
      <CompCursor />
      <CompHeader />
      <CompVisual />
      <CompSection1 />
      <CompSection2 />
      <CompStickyContainer>
        <CompSticky>{/* CompSticky --> children으로 들어간다 */}
          <CompStickyInner>{/* CompStickyInner --> children으로 들어간다 */}
            <CompSection3 />
            <CompSection4 />
            <CompSection5 />
          </CompStickyInner>
        </CompSticky>
      </CompStickyContainer>{/* <div></div> --> 와 같다 */}
      <CompSection6 />
      <CompFooter />
    </>
  );
};
export default App;