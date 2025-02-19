import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // Using Lucide Icons
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="p-4 w-full h-fit flex items-center justify-between">
      {/* Logo */}
      <div className="text-primary font-bold text-3xl">Alex Dao</div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden">
        {menuOpen ? (
          <X className="text-3xl cursor-pointer" onClick={() => setMenuOpen(false)} />
        ) : (
          <Menu className="text-3xl cursor-pointer" onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 pr-8">
        <Link to="about" smooth={true} duration={500} className="cursor-pointer text-secondary bg-background py-2 px-4 rounded-md">
          About
        </Link>
        <Link to="projects" smooth={true} duration={500} className="cursor-pointer text-secondary bg-background py-2 px-4 rounded-md">
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} className="cursor-pointer text-secondary bg-background py-2 px-4 rounded-md">
          Contact
        </Link>
      </nav>

      {/* Mobile Navigation with Smooth Animation */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <Link to="about" smooth={true} duration={500} className="py-3 text-lg cursor-pointer" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to="projects" smooth={true} duration={500} className="py-3 text-lg cursor-pointer" onClick={() => setMenuOpen(false)}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} className="py-3 text-lg cursor-pointer" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </motion.div>
    </div>
  );
};

export default Navbar;
