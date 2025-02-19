import {Link} from 'react-scroll';

const Navbar = () => {

  return (
    <div className="m-[2%] w-full h-16 flex flex-col md:flex-row items-center justify-between">
        <div className="p-[2%] w-full md:w-[30%] justify-start">
            <h1 className="font-bold text-center text-3xl text-primary">Alex Dao</h1>
        </div>
        <div className="w-[70%] flex justify-center md:justify-end md:pr-[8%]">
            <nav className=" flex gap-6">
                <Link to="about" smooth={true} duration={500} className="cursor-pointer text-secondary">About</Link>
                <Link to="projects" smooth={true} duration={500} className="cursor-pointer text-secondary">Projects</Link>
                <Link to="contact" smooth={true} duration={500} className="cursor-pointer text-secondary">Contact</Link>
            </nav>
        </div>
    </div>
  );
};

export default Navbar;
