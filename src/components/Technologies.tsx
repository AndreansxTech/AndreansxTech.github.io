import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
    FaWindows,
    FaApple,
    FaHtml5,
    FaGithub,
    FaTerminal,
    FaPython
} from 'react-icons/fa';
import { 
    SiMikrotik, 
    SiCloudflare,
    SiProxmox,
    SiDebian,
    SiBroadcom,
    SiCplusplus,
    SiIos
} from 'react-icons/si';

const Technologies: React.FC = () => {
    const programmingLanguages = [
        { name: "Bash", icon: FaTerminal, color: "#4EAA25" },
        { name: "HTML", icon: FaHtml5, color: "#E34F26" },
        { name: "Python", icon: FaPython, color: "#4584b6" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
    ];

    const operatingSystems = [
        { name: "Windows", icon: FaWindows, color: "#0078D6" },
        { name: "iOS", icon: SiIos, color: "#A2AAAD" },
        { name: "Debian", icon: SiDebian, color: "#A80030" },
        { name: "Proxmox", icon: SiProxmox, color: "#E57000" },
    ];

    const brandsAndPlatforms = [
        { name: "MikroTik", icon: SiMikrotik, color: "#f5f3f0" },
        { name: "Cloudflare", icon: SiCloudflare, color: "#F48120" },
        { name: "GitHub", icon: FaGithub, color: "#181717" },
        { name: "Broadcom", icon: SiBroadcom, color: "#CC092F" }
    ];

    // Refs for scroll animations
    const techSectionRef = useRef<HTMLDivElement>(null);
    const gridOneRef = useRef<HTMLDivElement>(null);
    const gridTwoRef = useRef<HTMLDivElement>(null);
    const gridThreeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Observer for main section
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        // Observer for cards with staggered delays
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

        // Observe grids
        if (gridOneRef.current) {
            observer.observe(gridOneRef.current);
        }
        if (gridTwoRef.current) {
            observer.observe(gridTwoRef.current);
        }
        if (gridThreeRef.current) {
            observer.observe(gridThreeRef.current);
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
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                    style={{ textAlign: 'center', width: '100%' }}
                >
                    <p className="intro" style={{ color: 'var(--accent)', fontFamily: 'var(--font-primary)', marginBottom: '1rem' }}>03. Tools & Technologies</p>
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

                <div ref={techSectionRef} className="scroll-reveal">
                    {/* Row for Programming Languages */}
                    <motion.div 
                        ref={gridOneRef}
                        className="tech-grid scroll-reveal"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 120px)',
                            gap: '20px',
                            justifyContent: 'center',
                            width: '100%',
                            marginBottom: '2rem'
                        }}
                    >
                        {programmingLanguages.map((tech, index) => (
                            <motion.div 
                                key={index}
                                className="tech-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true, amount: 0.1 }}
                                whileHover={{ 
                                    y: -5,
                                    scale: 1.1,
                                    transition: { duration: 0.2 }
                                }}
                                title={tech.name}
                                style={{
                                    backgroundColor: 'var(--bg-lighter)',
                                    borderRadius: '12px',
                                    padding: '16px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                    aspectRatio: '1/1'
                                }}
                            >
                                {React.createElement(tech.icon as React.ElementType, { 
                                    size: 36,
                                    color: tech.color
                                })}
                                <span style={{ 
                                    fontSize: '12px', 
                                    marginTop: '8px', 
                                    textAlign: 'center',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    maxWidth: '100%'
                                }}>
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Row for Operating Systems */}
                    <motion.div 
                        ref={gridTwoRef}
                        className="tech-grid scroll-reveal"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 120px)',
                            gap: '20px',
                            justifyContent: 'center',
                            width: '100%',
                            marginBottom: '2rem'
                        }}
                    >
                        {operatingSystems.map((tech, index) => (
                            <motion.div 
                                key={index}
                                className="tech-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                                viewport={{ once: true, amount: 0.1 }}
                                whileHover={{ 
                                    y: -5,
                                    scale: 1.1,
                                    transition: { duration: 0.2 }
                                }}
                                title={tech.name}
                                style={{
                                    backgroundColor: 'var(--bg-lighter)',
                                    borderRadius: '12px',
                                    padding: '16px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                    aspectRatio: '1/1'
                                }}
                            >
                                {React.createElement(tech.icon as React.ElementType, { 
                                    size: 36,
                                    color: tech.color
                                })}
                                <span style={{ 
                                    fontSize: '12px', 
                                    marginTop: '8px', 
                                    textAlign: 'center',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    maxWidth: '100%'
                                }}>
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Row for Brands and Platforms */}
                    <motion.div 
                        ref={gridThreeRef}
                        className="tech-grid scroll-reveal"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 120px)',
                            gap: '20px',
                            justifyContent: 'center',
                            width: '100%'
                        }}
                    >
                        {brandsAndPlatforms.map((tech, index) => (
                            <motion.div 
                                key={index}
                                className="tech-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                                viewport={{ once: true, amount: 0.1 }}
                                whileHover={{ 
                                    y: -5,
                                    scale: 1.1,
                                    transition: { duration: 0.2 }
                                }}
                                title={tech.name}
                                style={{
                                    backgroundColor: 'var(--bg-lighter)',
                                    borderRadius: '12px',
                                    padding: '16px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                    aspectRatio: '1/1'
                                }}
                            >
                                {React.createElement(tech.icon as React.ElementType, { 
                                    size: 36,
                                    color: tech.color
                                })}
                                <span style={{ 
                                    fontSize: '12px', 
                                    marginTop: '8px', 
                                    textAlign: 'center',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    maxWidth: '100%'
                                }}>
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;