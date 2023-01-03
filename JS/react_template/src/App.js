import { Helmet } from "react-helmet";
import CompCursor from "./components/CompCursor";
import CompHeader from "./components/CompHeader";
import CompVisual from "./components/CompVisual";
import CompSection1 from "./components/CompSection1";
import CompSection2 from "./components/CompSection2";
import CompSection6 from "./components/CompSection6";
import CompStickyContainer from "./components/CompStickyContainer";
import CompSticky from "./components/CompSticky";
import CompStickyInner from "./components/CompStickyInner";
import CompSection3 from "./components/CompSection3";
import CompSection4 from "./components/CompSection4";
import CompSection5 from "./components/CompSection5";

const App = () => {

  return (
    <>
      <Helmet>
        <script defer src={`${process.env.PUBLIC_URL}/JS/common.js`} />
        <script defer src={`${process.env.PUBLIC_URL}/JS/cursor.js`} />
        {/* ${process.env.PUBLIC_URL} --> React에서 절대경로 명렁어! */}
      </Helmet>
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
    </>
  );
};
export default App;