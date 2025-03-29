import React from 'react';

const About: React.FC = () => {
    const skills = [
        "Networking",
        "Systems Administration",
        "Data Center Infrastructure",
        "MikroTik",
        "Homelab Management",
        "CompTIA Network+"
    ];
    
    return (
        <section id="about">
            <h2>About Me</h2>
            <p>
                I'm a high school student with a strong interest in computer networking, systems administration, 
                and data center infrastructure. I'm currently developing my skills through hands-on experience 
                with physical hardware in my homelab environment and watching courses regarding networking.
            </p>
            <p>
                I'm also actively learning the foundational concepts covered by the CompTIA Network+ certification 
                as part of my broader exploration of IT and networking technologies.
            </p>
            <p>
                In addition to my technical pursuits, I've previously enjoyed pencil drawing, particularly more 
                realistic takes on animated characters. I'm also interested in smartphones—especially Apple devices—and 
                have experience with basic hardware repair on Samsung phones.
            </p>
            
            <h3>Career Goals</h3>
            <p>
                My long-term goal is to work professionally in network engineering. I'm particularly interested 
                in routing, switching, and scalable network infrastructure. To prepare for this path, I'm focusing 
                on building practical experience and deepening my theoretical knowledge.
            </p>
            
            <h3>Skills & Interests</h3>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-badge">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;