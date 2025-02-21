import { Brush, Server, Palette } from 'lucide-react';

const Skills = () => {
    return (
        <div className="flex justify-center items-center w-full py-10">
            {/* Secondary background container */}
            <div className="bg-secondaryBackground w-[80vw] rounded-lg shadow-lg flex flex-col items-center p-6">
                <h1 className="text-5xl font-bold text-white my-10">Skills</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {/* Front-end Developer */}
                    <div className="bg-white rounded-lg shadow-lg flex flex-col p-6 h-full flex-grow">
                        <Brush className="w-10 h-10 text-accent mb-4 mx-auto" />
                        <h1 className="text-xl font-semibold text-black mx-auto mb-4">Front-end Developer</h1>
                        <h2 className="text-secondary text-center mb-4">
                            Bridging the gap between design and functionality with modern front-end magic.
                        </h2>
                        <h1 className="text-lg font-medium text-black mx-auto mb-2">Languages</h1>
                        <h2 className="text-secondary text-center mb-4">HTML, CSS, JavaScript</h2>
                        <h1 className="text-lg font-medium text-black mx-auto mb-2">Tools</h1>
                        <h2 className="text-secondary text-center mb-4">React.js, TailwindCSS, TypeScript, Next.js, Bootstrap</h2>
                    </div>

                    {/* Back-end Developer */}
                    <div className="bg-white rounded-lg shadow-lg flex flex-col p-6 h-full flex-grow">
                        <Server className="w-10 h-10 text-accent mb-4 mx-auto" />
                        <h1 className="text-xl font-semibold text-black mx-auto mb-4">Back-end Developer</h1>
                        <h2 className="text-secondary text-center mb-4">
                            Building robust server-side logic and databases to power applications.
                        </h2>
                        <h1 className="text-lg font-medium text-black mx-auto mb-2">Languages</h1>
                        <h2 className="text-secondary text-center mb-4">Node.js, Python, Java</h2>
                        <h1 className="text-lg font-medium text-black mx-auto mb-2">Tools</h1>
                        <h2 className="text-secondary text-center mb-4">Express.js, MongoDB, Firebase, MySQL</h2>
                    </div>

                    {/* UI/UX Designer */}
                    <div className="bg-white rounded-lg shadow-lg flex flex-col p-6 h-full flex-grow">
                        <Palette className="w-10 h-10 text-accent mb-4 mx-auto" />
                        <h1 className="text-xl font-semibold text-black mx-auto mb-4">UI/UX Designer</h1>
                        <h2 className="text-secondary text-center mb-4">
                            Crafting intuitive and visually appealing user interfaces.
                        </h2>
                        <h1 className="text-lg font-medium text-black mx-auto mb-2">Tools</h1>
                        <h2 className="text-secondary text-center mb-4">Figma, Adobe XD, Sketch</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
