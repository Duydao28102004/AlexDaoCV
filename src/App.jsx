import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import AnimatedSection from "./components/AnimatedSection"

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
          <Hero />
          <AnimatedSection id="skills">
            <Skills />
          </AnimatedSection>
          <AnimatedSection id="projects">
            <Projects />
          </AnimatedSection>
        </div>
      </div>
    </>
  )
}

export default App
