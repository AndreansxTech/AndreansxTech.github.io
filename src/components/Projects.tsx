import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

const Projects: React.FC = () => {
    const projectList = [
        {
            title: 'Staszic360',
            description: 'Webowa aplikacja wirtualnej wycieczki, demonstrująca moje podstawowe umiejętności programowania i wdrażania projektów.',
            technologies: ['React', 'Three.js', 'JavaScript', 'HTML/CSS'],
            githubLink: 'https://github.com/AndreansxTech/Staszic360',
            liveLink: 'https://github.com/AndreansxTech/Staszic360'
        },
        {
            title: 'My-homelab',
            description: 'Szczegółowa dokumentacja i konfiguracja mojego osobistego laboratorium domowego, gdzie rozwijam umiejętności sieciowe i infrastrukturalne.',
            technologies: ['Networking', 'MikroTik', 'Infrastructure', 'Documentation'],
            githubLink: 'https://github.com/AndreansxTech/My-homelab',
            liveLink: null
        },
        {
            title: 'Portfolio Website',
            description: 'Moja osobista strona portfolio zbudowana przy użyciu React i TypeScript, z zastosowaniem nowoczesnego podejścia do projektowania.',
            technologies: ['React', 'TypeScript', 'Framer Motion', 'Styled Components'],
            githubLink: 'https://github.com/AndreansxTech/AndreansxTech.github.io',
            liveLink: 'https://andreansxtech.github.io'
        }
    ];

    return (
        <section id="projects">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h2 className="fade-up">Moje projekty</h2>
                </motion.div>
                
                <div className="projects-grid">
                    {projectList.map((project, index) => (
                        <motion.div 
                            className="project-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <div style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>
                                    {React.createElement(FaFolder as React.ElementType)}
                                </div>
                                <div className="project-links">
                                    {project.githubLink && (
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                                            {React.createElement(FaGithub as React.ElementType)}
                                        </a>
                                    )}
                                    {project.liveLink && (
                                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                                            {React.createElement(FaExternalLinkAlt as React.ElementType)}
                                        </a>
                                    )}
                                </div>
                            </div>
                            
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            
                            <div className="tech-stack">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex}>{tech}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    style={{ textAlign: 'center', marginTop: '3rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <a 
                        href="https://github.com/AndreansxTech" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '1rem 2rem',
                            border: '1px solid var(--accent)',
                            borderRadius: '4px',
                            fontSize: '0.9rem',
                            fontFamily: 'var(--font-primary)'
                        }}
                    >
                        Zobacz więcej na GitHubie
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;