import { Brush, Server, Palette } from 'lucide-react';

const Skills = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full py-10">
            {/* Secondary background container */}
            <div className="bg-secondaryBackground w-[80vw] rounded-lg shadow-lg flex flex-col items-center p-6">
                <h1 className="text-5xl font-bold text-white my-10">Skills</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {[
                        {
                        name: "Front-end Developer", 
                        icon: <Brush className="w-10 h-10 text-accent mb-4 mx-auto" />,
                        description: "Bridging the gap between design and functionality with modern front-end magic.", 
                        languages: "HTML, CSS, JavaScript", 
                        tools: "React.js, TailwindCSS, TypeScript, Next.js, Bootstrap"
                        },
                        {
                        name: "Back-end Developer",
                        icon: <Server className="w-10 h-10 text-accent mb-4 mx-auto" />,
                        description: "Building robust server-side logic and databases to power applications.",
                        languages: "Node.js, Python, Java",
                        tools: "Express.js, MongoDB, Firebase, MySQL"
                        },
                        {
                        name: "UI/UX Designer",
                        icon: <Palette className="w-10 h-10 text-accent mb-4 mx-auto" />,
                        description: "Crafting intuitive and visually appealing user interfaces.",
                        tools: "Figma, Adobe XD, Sketch"
                        }
                    ].map((skill, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg flex flex-col p-6 h-full flex-grow">
                            {skill.icon}
                            <h1 className="text-xl font-semibold text-black mx-auto mb-4">{skill.name}</h1>
                            <h2 className="text-secondary text-center mb-4">
                                {skill.description}
                            </h2>
                            {skill.languages == null ? null : (
                                <div>
                                    <h1 className="text-lg font-medium text-black text-center mb-2">Languages</h1>
                                    <h2 className="text-secondary text-center mb-4">{skill.languages}</h2>
                                </div>
                            )}
                            <h1 className="text-lg font-medium text-black mx-auto mb-2">Tools</h1>
                            <h2 className="text-secondary text-center mb-4">{skill.tools}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <a 
                href="https://drive.google.com/file/d/1Vif23Q5AJTuCwLVIVhaoND2o23hiYzm2/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                <button className="bg-secondaryBackground text-white px-4 py-2 rounded-md shadow-md hover:bg-accent transition duration-300 mt-10">
                    View my resume
                </button>
            </a>
        </div>
    );
};

export default Skills;
