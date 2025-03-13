import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div 
        initial={{ opacity: 0, y: 500 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex w-full py-10">
        {/* Hero section div */}
        <div className="mx-auto w-[80%] rounded-md md:p-10">
            {/* Hero section avatar */}
            <div className="mx-auto w-[20vw] h-[20vw] rounded-full border-4 border-white shadow-lg overflow-hidden">
                <img src="/avatar.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>

            {/* Hero section title */}
            <h1 className="text-3xl font-bold text-accent text-center mt-4">DAO BAO DUY (ALEX)</h1>
        
            {/* Hero section text content */}
            <div className="md:p-8">
                <p className="text-secondary text-center">
                    &quot;As a last-year university student in Information Technology, passionate about technology and coding, I am thrilled to start working as an IT developer. To put my academic knowledge to use and gain practical experience, I have worked on some school projects highlighting my interest in programming languages,particularly in Java and web technologies. I have a basic foundation in software development principles and can&apos;t wait to apply this knowledge in the real world. Additionally, working at Starbucks has helped me build valuable skills, such as time management, communication, adaptability, and a customer-centered mindset, which complement my technical expertise and will be beneficial in my IT career.
                </p>
            </div>
        </div>
    </motion.div>
  )
}
export default Hero;
