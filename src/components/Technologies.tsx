import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
    FaGithub
} from 'react-icons/fa';
import { 
    SiMikrotik, 
    SiCloudflare,
    SiDebian
} from 'react-icons/si';

const Technologies: React.FC = () => {
    const techItems = [
        { 
            name: "MikroTik", 
            icon: SiMikrotik, 
            color: "#f5f3f0",
            description: "Reliable networking solutions that offer great value for money. I love their flexibility in configuration and advanced routing features."
        },
        { 
            name: "Debian", 
            icon: SiDebian, 
            color: "#A80030",
            description: "A stable and secure operating system, ideal for servers. I value it for its reliability and the availability of software repositories."
        },
        { 
            name: "GitHub", 
            icon: FaGithub, 
            color: "#ffffff",
            description: "An essential tool for project collaboration and version control. I use it to store all my projects and learn from the community."
        },
        { 
            name: "Cloudflare", 
            icon: SiCloudflare, 
            color: "#F48120",
            description: "A service that ensures website security and performance. I use it to secure my services and accelerate access to them."
        }
    ];

    // Ref for scroll animations
    const techSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Observer for the main section
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        // Observer for cards with delays
        const cardObserver = new IntersectionObserver(entries => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add delay based on index
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        // Observe the section
        if (techSectionRef.current) {
            observer.observe(techSectionRef.current);
        }

        // Observe all cards
        document.querySelectorAll('.tech-card').forEach(card => {
            cardObserver.observe(card);
        });

        return () => {
            observer.disconnect();
            cardObserver.disconnect();
        };
    }, []);

    return (
        <section id="technologies" className="animated-bg">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                    style={{ textAlign: 'center', width: '100%' }}
                >
                    <p className="intro" style={{ color: 'var(--accent)', fontFamily: 'var(--font-primary)', marginBottom: '1rem' }}>04. Tools & Technologies</p>
                    <h2 className="fade-up">Technologies I Use & Admire</h2>
                </motion.div>
                
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    style={{ maxWidth: '700px', margin: '0 auto 3rem', textAlign: 'center' }}
                >
                    Here are some of the technologies, platforms, and vendors that shape my learning journey 
                    and infrastructure approach. I'm particularly focused on networking technologies and
                    enterprise-grade solutions.
                </motion.p>

                <div ref={techSectionRef} className="tech-grid scroll-reveal">
                    {techItems.map((tech, index) => (
                        <motion.div 
                            key={index}
                            className="tech-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="tech-icon">
                                {React.createElement(tech.icon as React.ElementType, { 
                                    size: 48,
                                    color: tech.color
                                })}
                            </div>
                            <div className="tech-card-content">
                                <h3>{tech.name}</h3>
                                <p>{tech.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
