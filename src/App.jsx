import TopHeading from "./components/TopHeading"
import About from "./components/About"
import Cursor from "./components/subcomponents/Cursor"
import TechStack from "./components/TechStack"
import BlurEffect from "./components/subcomponents/BlurEffect"
import NavBar from "./components/NavBar"

function App() {
  return (
    <>
      <BlurEffect>
        <div className="min-h-screen p-3 bg-black h-full w-full text-justify flex flex-col items-center">
          <div className="w-full lg:max-w-5xl xl:max-w-6xl 2xl:max-w-3xl mx-auto px-4">
            <Cursor className="z-100" />
            <TopHeading />
            <About />
            <TechStack />
          </div>
        </div>
      </BlurEffect>
      <NavBar /> {/* Navbar outside BlurEffect */}
    </>
  )
}

export default App

