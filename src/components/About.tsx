import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaNetworkWired, FaShieldAlt, FaTerminal } from 'react-icons/fa';

const About: React.FC = () => {
    const interests = [
        "Network Routing",
        "Switching",
        "MikroTik RouterOS",
        "VLAN & Trunking",
        "Brocade CLI",
        "Network Monitoring"
    ];
    
    return (
        <section id="about">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h2 className="fade-up">About Me</h2>
                </motion.div>
                
                <div className="about-content">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="fade-up"
                    >
                        <p>
                            I'm Andreansx, a high school student with a strong passion for networking technologies. 
                            My primary interest lies in gaining a deep understanding of network routing, switching, 
                            and scalable infrastructures—particularly those found in ISP and data center contexts.
                        </p>
                        <p>
                            My homelab is my primary classroom: it's not a static setup or a typical self-hosting, but rather 
                            a dynamic environment where I rigorously test theories, deliberately break configurations, 
                            and rebuild networks to gain a solid understanding of both fundamental and advanced networking concepts.
                        </p>
                        
                        <div className="tech-icons" style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--accent)' }}>
                                {React.createElement(FaNetworkWired as React.ElementType, { size: 30 })}
                                <span style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Networking</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--accent)' }}>
                                {React.createElement(FaServer as React.ElementType, { size: 30 })}
                                <span style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Infrastructure</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--accent)' }}>
                                {React.createElement(FaTerminal as React.ElementType, { size: 30 })}
                                <span style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>CLI</span>
                            </div>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="fade-up"
                    >
                        <h3>Career Aspirations</h3>
                        <p>
                            I aim to build a career in professional networking, particularly interested in:
                            ISP backbone infrastructure, advanced routing solutions (OSPF, BGP, MPLS),
                            data center switching, redundancy, load balancing, and scalable designs.
                            My philosophy is simple: depth and understanding matter more than superficial familiarity.
                        </p>

                        <h3>Interests</h3>
                        <div className="interests-container">
                            {interests.map((interest, index) => (
                                <motion.div 
                                    key={index} 
                                    className="interest-badge"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    {interest}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;