import React from 'react';
import { motion } from 'framer-motion';
import { 
    FaNetworkWired, 
    FaMicrochip, 
    FaServer, 
    FaApple, 
    FaShieldAlt,
    FaCloud,
    FaCode
} from 'react-icons/fa';
import { SiMikrotik, SiCloudflare } from 'react-icons/si';

const Technologies: React.FC = () => {
    const techItems = [
        { 
            name: "MikroTik", 
            icon: SiMikrotik, 
            description: "My go-to platform for routing, switching, and network experimentation"
        },
        { 
            name: "Networking", 
            icon: FaNetworkWired, 
            description: "Layer 2 switching, VLAN segmentation, 802.1Q tagging" 
        },
        { 
            name: "Infrastructure", 
            icon: FaServer, 
            description: "Data center infrastructure and enterprise networking solutions" 
        },
        { 
            name: "Hardware", 
            icon: FaMicrochip, 
            description: "Working with real physical network equipment for hands-on learning" 
        },
        { 
            name: "Apple", 
            icon: FaApple, 
            description: "Long-time user with interest in their hardware design and networking stack" 
        },
        { 
            name: "Cloudflare", 
            icon: SiCloudflare, 
            description: "Using Cloudflare Pages and DNS for deployments and security experiments" 
        },
        { 
            name: "Security", 
            icon: FaShieldAlt, 
            description: "Network security protocols and best practices" 
        },
        { 
            name: "Cloud", 
            icon: FaCloud, 
            description: "Understanding how modern cloud infrastructures connect and operate" 
        }
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
                
                <div className="tech-grid">
                    {techItems.map((tech, index) => (
                        <motion.div 
                            className="tech-card"
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="tech-icon">
                                {React.createElement(tech.icon as React.ElementType, { size: 40 })}
                            </div>
                            <h3>{tech.name}</h3>
                            <p>{tech.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;