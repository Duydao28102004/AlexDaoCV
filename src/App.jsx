import Navbar from "./components/Navbar"
import Hero from "./components/Hero"


function App() {
  return (
    <>
      <Navbar />
      <div className="relative w-full min-h-screen">
      
        <div
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/heroBackground.jpg')" }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center text-white">
          <section id="hero">
            <Hero />
          </section>
        </div>
      </div>
    </>
  )
}

export default App
