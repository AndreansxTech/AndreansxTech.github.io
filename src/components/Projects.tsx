import React from 'react';

const Projects: React.FC = () => {
    const projectList = [
        {
            title: 'Staszic360',
            description: 'Featured project from GitHub profile. Click to learn more about this project.',
            link: 'https://github.com/AndreansxTech/Staszic360'
        },
        {
            title: 'My-homelab',
            description: 'Documentation and setup of my personal homelab environment where I develop networking and infrastructure skills.',
            link: 'https://github.com/AndreansxTech/My-homelab'
        },
        {
            title: 'Portfolio Website',
            description: 'This personal portfolio website built with React and TypeScript.',
            link: 'https://github.com/AndreansxTech/AndreansxTech.github.io'
        }
    ];

    return (
        <div className="projects" id="projects">
            <h2>My Projects</h2>
            <ul>
                {projectList.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;