import { TramFront, Lightbulb, ShoppingBag } from "lucide-react";

const Projects = () => {
    return (
        <div className="flex w-full py-10">
            <div className="mx-auto w-[80%]">
                {/* Projects section title */}
                <h1 className="text-4xl md:text-5xl font-bold text-accent text-center my-10">Projects</h1>

                {/* Project List */}
                {[
                    {
                        icon: <Lightbulb className="w-20 h-20 text-red-700" />,
                        bgColor: "bg-red-500",
                        borderColor: "border-b-red-500",
                        title: "MERN stack mental health website",
                        description:
                            "As a full-stack team member, we built a website with features like a mood tracker and chat support to assist individuals facing mental health challenges.",
                        link: "https://github.com/Duydao28102004/MentalBay",
                    },
                    {
                        icon: <ShoppingBag className="w-20 h-20 text-green-700" />,
                        bgColor: "bg-green-500",
                        borderColor: "border-b-green-500",
                        title: "Full stack e-commerce website",
                        description:
                            "As a front-end developer, I worked on building an e-commerce platform with a seamless UI and robust back-end integration.",
                        link: "https://github.com/Rainb0wBanana/COSC2430-Full-stack-Web-Application",
                    },
                    {
                        icon: <TramFront className="w-20 h-20 text-blue-700" />,
                        bgColor: "bg-blue-500",
                        borderColor: "border-b-blue-500",
                        title: "Travel and booking Android application",
                        description:
                            "Using Java, I developed TraveWhere, a mobile app that simplifies accommodation booking and enables real-time chat between travelers and property owners. Integrated Google Maps API for location tracking.",
                        link: "https://github.com/Duydao28102004/Travewhere",
                    },
                ].map((project, index) => (
                    <div key={index} className="flex flex-col md:flex-row w-full gap-4 py-4">
                        <div className={`w-full md:w-1/2 min-h-[250px] p-6 flex ${project.bgColor} justify-center items-center`}>
                            {project.icon}
                        </div>
                        <div className={`w-full md:w-1/2 min-h-[250px] p-6 flex flex-col items-center justify-center border ${project.borderColor} border-b-4 bg-white rounded-md`}>
                            <h1 className="text-xl font-semibold text-black text-center mx-auto mb-4">{project.title}</h1>
                            <h2 className="text-secondary text-center mb-4">{project.description}</h2>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-accent text-center mb-4">
                                View here &gt;&gt;
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
