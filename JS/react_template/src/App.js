import Comp404 from "./Comp404";
import CompMinusContainer from "./CompMinusContainer";
import CompNav from "./CompNav";
import CompPlusContainer from "./CompPlusContainer";

const App = () => {
  return (
    <>
      <CompNav />
      <Routes>
        <Route path="/" element={<CompPlusContainer />} />
        <Route path="minus" element={<CompMinusContainer />} />
        <Route path="*" element={<Comp404 />} />
      </Routes>
    </>
  );
};
export default App;