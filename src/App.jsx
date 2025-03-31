import TopHeading from "./components/TopHeading";
import About from "./components/About";
import Cursor from "./components/subcomponents/Cursor";
import TechStack from "./components/TechStack";
import BlurEffect from "./components/subcomponents/BlurEffect";
import NavBar from "./components/NavBar";
import ShowCase from "./components/ShowCase";
import Background from "./components/subcomponents/Background";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <BlurEffect>
        <Background/>
        <div className=" p-3 bg-black w-full text-justify flex flex-col items-center">
          <div className="w-full lg:max-w-5xl xl:max-w-6xl 2xl:max-w-3xl mx-auto px-4">
            <TopHeading target="home"  />
            <About target="about" />
            <TechStack />
          </div>
        </div>

        <div className="min-h-screen w-full bg-black flex flex-col items-center">
          <div className="w-full lg:max-w-5xl xl:max-w-6xl 2xl:max-w-3xl mx-auto px-4">
            <ShowCase/>
            <Projects/>
          </div>
        </div>
      </BlurEffect>

      <Cursor />
      <NavBar />
    </>
  );
}

export default App;
