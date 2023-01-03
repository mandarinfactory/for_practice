import { Helmet } from "react-helmet";
import CompCursor from "./components/CompCursor";
import CompHeader from "./components/CompHeader";
import CompVisual from "./components/CompVisual";
import CompSection1 from "./components/CompSection1";
import CompSection2 from "./components/CompSection2";
import CompSection6 from "./components/CompSection6";

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
      <CompSection6 />
    </>
  );
};
export default App;