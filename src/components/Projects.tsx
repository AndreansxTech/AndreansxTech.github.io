import React, { useEffect, useRef } from 'react';
import { motion, TargetAndTransition } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

const Projects: React.FC = () => {
    const projectList = [
        {
            title: 'My Homelab',
            description: 'Detailed documentation of my networking lab with configuration scenarios, network diagrams, and technical notes about enterprise-like setups.',
            technologies: ['Networking', 'MikroTik', 'Brocade', 'Documentation'],
            githubLink: 'https://github.com/AndreansxTech/My-homelab',
            liveLink: null
        },
        {
            title: 'Staszic360',
            description: 'Web-based virtual tour application demonstrating my basic programming and project deployment skills.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'Pannellum.js'],
            githubLink: 'https://github.com/AndreansxTech/Staszic360',
            liveLink: 'https://AndreansxTech.github.io/Staszic360'
        },
        {
            title: 'Portfolio Website',
            description: 'My personal portfolio website built with React and TypeScript, using modern design approaches.',
            technologies: ['React', 'TypeScript', 'Framer Motion'],
            githubLink: 'https://github.com/AndreansxTech/AndreansxTech.github.io',
            liveLink: 'https://andreansxtech.github.io'
        }
    ];

    // Ref to track scroll direction
    const lastScrollY = useRef<number>(0);
    const projectsSectionRef = useRef<HTMLDivElement>(null);
    // State to track if we've initialized the last scroll position
    const scrollInitialized = useRef<boolean>(false);

    useEffect(() => {
        // Set initial scroll position for accurate direction tracking
        lastScrollY.current = window.scrollY;
        scrollInitialized.current = true;
        
        // Track scroll direction
        const handleScroll = () => {
            lastScrollY.current = window.scrollY;
        };
        
        window.addEventListener('scroll', handleScroll);

        // Observer for project cards
        const projectObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const currentScrollY = window.scrollY;
                const scrollingDown = scrollInitialized.current ? currentScrollY > lastScrollY.current : true;
                
                if (entry.isIntersecting) {
                    // Element is entering viewport
                    if (scrollingDown) {
                        // Scrolling down - animate from bottom
                        entry.target.classList.add('visible-from-bottom');
                        entry.target.classList.remove('visible-from-top');
                    } else {
                        // Scrolling up - animate from top
                        entry.target.classList.add('visible-from-top');
                        entry.target.classList.remove('visible-from-bottom');
                    }
                } else {
                    // Element is leaving viewport
                    entry.target.classList.remove('visible-from-top', 'visible-from-bottom');
                }
            });
        }, { threshold: 0.1 });

        // Observe all project cards
        document.querySelectorAll('.project-card').forEach(card => {
            projectObserver.observe(card);
        });

        return () => {
            projectObserver.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to handle click on project card
    const handleProjectClick = (url: string | null) => {
        if (url) {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    };

    // Helper function to create animation based on inView and scroll direction
    const getScrollAnimation = (inView: boolean): TargetAndTransition => {
        // Only check direction if we've initialized the last scroll position
        const currentScrollY = window.scrollY;
        const scrollingDown = scrollInitialized.current ? currentScrollY > lastScrollY.current : true;
        
        if (!inView) {
            // When element leaves viewport, animation depends on scroll direction
            return {
                opacity: 0,
                y: scrollingDown ? 30 : -30, // Exits in opposite direction to scrolling
                transition: { duration: 0.3 }
            };
        }
        
        // When element enters viewport
        return {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        };
    };

    // Determine current scroll direction for initial state
    const isScrollingDown = (): boolean => {
        return scrollInitialized.current 
            ? window.scrollY > lastScrollY.current 
            : true;
    };

    // Initial animation properties based on scroll direction
    const getInitialProps = (): TargetAndTransition => {
        const scrollDown = isScrollingDown();
        return {
            opacity: 0,
            y: scrollDown ? 30 : -30
        };
    };

    return (
        <section id="projects" ref={projectsSectionRef}>
            <div className="container">
                <motion.div
                    initial={getInitialProps()}
                    whileInView="visible"
                    variants={{
                        visible: (custom: boolean) => getScrollAnimation(true)
                    }}
                    custom={isScrollingDown()}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <p className="intro" style={{ color: 'var(--accent)', fontFamily: 'var(--font-primary)', marginBottom: '1rem' }}>02. Projects</p>
                    <h2 className="fade-up">My Projects</h2>
                </motion.div>
                
                <div className="projects-grid">
                    {projectList.map((project, index) => (
                        <motion.div 
                            className="project-card"
                            key={index}
                            initial={getInitialProps()}
                            whileInView="visible"
                            variants={{
                                visible: (custom: boolean) => getScrollAnimation(true)
                            }}
                            custom={isScrollingDown()}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            onClick={() => handleProjectClick(project.githubLink)}
                            style={{
                                cursor: project.githubLink ? 'pointer' : 'default',
                                position: 'relative'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <div style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>
                                    {React.createElement(FaFolder as React.ElementType)}
                                </div>
                                <div className="project-links">
                                    {project.githubLink && (
                                        <a 
                                            href={project.githubLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            aria-label="GitHub Repository"
                                            onClick={(e) => e.stopPropagation()} // Prevent triggering the parent onClick
                                        >
                                            {React.createElement(FaGithub as React.ElementType)}
                                        </a>
                                    )}
                                    {project.liveLink && (
                                        <a 
                                            href={project.liveLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            aria-label="Live Demo"
                                            onClick={(e) => e.stopPropagation()} // Prevent triggering the parent onClick
                                        >
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
                            
                            {/* Add a hover indicator to show the card is clickable */}
                            <div className="click-indicator"></div>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    style={{ textAlign: 'center', marginTop: '3rem' }}
                    initial={getInitialProps()}
                    whileInView="visible"
                    variants={{
                        visible: (custom: boolean) => getScrollAnimation(true)
                    }}
                    custom={isScrollingDown()}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: false, amount: 0.2 }}
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
                        See More on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;