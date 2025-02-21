import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"

function App() {
  return (
    <>
      
      <div className="relative w-full min-h-screen">
        {/*Background */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/heroBackground.jpg')" }}
        />
        {/*Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-white">
          <Navbar />
          <section id="about">
            <Hero />
          </section>
          <section id="skills">
            <Skills />
          </section>
        </div>
      </div>
    </>
  )
}

export default App
