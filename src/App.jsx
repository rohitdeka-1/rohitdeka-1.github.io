import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="flex-grow bg-[#20a3cf]">
        <Hero />
      </section>
      <section className="min-h-screen bg-[#FADA5E] flex justify-center items-center" id="about">
        <About />
      </section>
      <section className="min-h-screen bg-[#1846eda4] flex justify-center p-10 items-start" id="projects">
        <Projects/>
      </section>
    </div>
  )
}

export default App