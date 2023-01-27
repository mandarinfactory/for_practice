import CompCursor from "./comp/CompCursor";
import CompHeader from "./comp/CompHeader";
import CompTitle from "./comp/CompTitle";
import CompVisual from "./comp/CompVisual";
import CompSection1 from "./comp/CompSection1";
import CompSection2 from "./comp/CompSection2";
import CompSection3 from "./comp/CompSection3";
import CompSection4 from "./comp/CompSection4";
import CompSection5 from "./comp/CompSection5";
import CompSection6 from "./comp/CompSection6";
import CompStickyContainer from "./comp/CompStickyContainer";
import CompSticky from "./comp/CompSticky";
import CompStickyInner from "./comp/CompStickyInner";
import CompFooter from "./comp/CompFooter";
import { useEffect } from "react";

const App = () => {

  useEffect(() => {
    let scriptArr = [
      'cursor.js',
      'layout.js',
      'preloader.js',
      'header.js',
      'section1.js',
      'section2.js',
      'section3.js',
      'section4.js',
      'section5.js',
      'section6.js',
      'visual.js',
      'title.js',
      'bubble.js',
      'sticky.js'
    ]
    scriptArr.forEach((v) => {
      let script = document.createElement('script');
      script.src = `${process.env.PUBLIC_URL}/JS/${v}`;
      script.defer = true;
      document.body.appendChild(script);
    })

    /* 스크립트 제거..... */
  }, [])
  return (
    <>
      <CompTitle />
      <CompCursor />
      <CompHeader />
      <CompVisual />
      <CompSection1 />{/* fixed */}
      <div className="scr-section1 scr-target1"></div>
      <CompSection2 />
      <CompStickyContainer>
        <CompSticky>
          <CompStickyInner>
            <CompSection3 />
            <CompSection4 />
            <CompSection5 />
          </CompStickyInner>
        </CompSticky>
        <div className="scr-div scr-target4" />
        <div className="scr-div scr-target5" />
      </CompStickyContainer>
      <CompSection6 />
      <CompFooter />
    </>
  );
};
export default App;