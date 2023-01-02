import { Helmet } from "react-helmet";
import CompHeader from "./components/CompHeader"

const App = () => {

  return (
    <>
      <Helmet>
        <script defer src={`${process.env.PUBLIC_URL}/JS/common.js`} />
        {/* ${process.env.PUBLIC_URL} --> React에서 절대경로 명렁어! */}
      </Helmet>
      <CompHeader />
    </>
  );
};
export default App;