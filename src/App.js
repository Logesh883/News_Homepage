import Navigation from "./Component/navbar";
import Body from "./Component/body";
import Anside from "./Component/sidebar";
import "./index.css";
import { Footer } from "./Component/footer";

function App() {
  return (
    <div className="max-h-[1440px] bg-Offwhite  md:mx-20 md:my-5 ">
      <div className="flex flex-col flex-wrap">
        <Navigation />
      </div>
      <div className="flex max-sm:flex-col   ">
        <div className="flex">
          <Body />
        </div>
        <div className="mt-3 ml-8">
          <Anside />
        </div>
      </div>
      <div className="mt-12 ">
        <Footer />
      </div>
    </div>
  );
}

export default App;
