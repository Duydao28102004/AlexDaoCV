const Experiences = () => {
    return (
        <div className="w-full py-10">
            <div className="flex flex-col items-center w-[80%] mx-auto">
                <h1 className="text-5xl text-black font-semibold mb-4">Experiences</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            year: 2019,
                            title: "Huynh Man Da High School",
                            role: "High School Diploma",
                            description: "Completed high school with a focus on science and technology subjects."
                        },
                        {
                            year: 2021,
                            title: "RMIT Vietnam",
                            role: "Bachelor of Information Technology",
                            description: "Currently pursuing a Bachelor’s degree in IT, specializing in website and mobile development."
                        },
                        {
                            year: 2023,
                            title: "RMIT Vietnam Fintech Club website",
                            role: "Front-end Developer",
                            description: "Developed the club’s website using NextJS framework and Tailwind CSS, showcasing events and resources for members.",
                            link: "https://www.rmitfintechclub.com/"
                        },
                        {
                            year: 2024,
                            title: "Barista",
                            role: "Starbucks",
                            description: "Developed soft skills and customer service experience in a professional environment."
                        }
                    ].map((experience, index) => (
                        <div key={index} className="flex items-center justify-center my-4 space-y-2">
                            <div className="flex-shrink-0 w-16 h-16 mr-4 bg-gray-100 text-gray-900 font-bold flex items-center justify-center rounded-full text-xl">{experience.year}</div>
                            <div>
                                <h3 className="text-xl font-semibold text-accent">{experience.title}</h3>
                                <p className="text-gray-600">{experience.description}</p>
                                {experience.link && (
                                    <a 
                                        href={experience.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-blue-500 hover:underline"
                                    >
                                        Visit here
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div> 
            </div>
        </div>
    );
};
export default Experiences;