import { Github, Linkedin, Facebook } from "lucide-react";
import React from "react";

const socialLinks = [
    { id: "github", href: "https://github.com/Duydao28102004", icon: <Github /> },
    { id: "facebook", href: "https://www.facebook.com/iamBaoDi/", icon: <Facebook /> },
    { id: "linkedin", href: "https://www.linkedin.com/in/alexdao2810", icon: <Linkedin /> }
];

const Footer = () => {
    return (
        <div className="bg-secondaryBackground w-full py-10">
            <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold text-white mb-4">Get in touch</h1>
                <div className="flex space-x-4">
                    {socialLinks.map(({ id, href, icon }) => (
                        <a key={id} href={href} target="_blank" rel="noopener noreferrer">
                            <div className="w-20 h-20 mx-4 bg-accent rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200">
                                {React.cloneElement(icon, { className: "w-12 h-12 text-white" })}
                            </div>
                        </a>
                    ))}
                </div>
            </div>
            <p className="text-center text-white mt-4">
                &copy; {new Date().getFullYear()} Alex Dao. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
