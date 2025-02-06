import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <section className="flex-grow bg-[#20a3cf]">
        <Hero />
      </section>
      <section className="min-h-screen bg-[#FADA5E] flex justify-center items-center">
        <About />
      </section>
    </div>
  )
}

export default App

