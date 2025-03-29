import React from 'react';
import { motion } from 'framer-motion';
import { 
    FaWindows,
    FaApple,
    FaHtml5,
    FaGithub,
    FaTerminal
} from 'react-icons/fa';
import { 
    SiMikrotik, 
    SiCloudflare,
    SiProxmox,
    SiDebian,
    SiBroadcom
} from 'react-icons/si';

const Technologies: React.FC = () => {
    const techItems = [
        { name: "MikroTik", icon: SiMikrotik, color: "#0099ff" },
        { name: "Debian", icon: SiDebian, color: "#A80030" },
        { name: "Cloudflare", icon: SiCloudflare, color: "#F48120" },
        { name: "Proxmox", icon: SiProxmox, color: "#E57000" },
        { name: "Windows", icon: FaWindows, color: "#0078D6" },
        { name: "Apple", icon: FaApple, color: "#A2AAAD" },
        { name: "Bash", icon: FaTerminal, color: "#4EAA25" },
        { name: "HTML", icon: FaHtml5, color: "#E34F26" },
        { name: "GitHub", icon: FaGithub, color: "#181717" },
        { name: "Broadcom", icon: SiBroadcom, color: "#CC092F" }
    ];

    return (
        <section id="technologies">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <p className="intro" style={{ color: 'var(--accent)', fontFamily: 'var(--font-primary)', marginBottom: '1rem' }}>03. Tools & Technologies</p>
                    <h2 className="fade-up">Technologies I Use & Admire</h2>
                </motion.div>
                
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    style={{ maxWidth: '700px', margin: '0 auto 3rem' }}
                >
                    Here are some of the technologies, platforms, and vendors that shape my learning journey 
                    and infrastructure approach. I'm particularly focused on networking technologies and
                    enterprise-grade solutions.
                </motion.p>
                
                <motion.div 
                    className="tech-grid"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                        gap: '20px',
                        maxWidth: '1000px',
                        margin: '0 auto'
                    }}
                >
                    {techItems.map((tech, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.02 }}
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
        </section>
    );
};

export default Technologies;