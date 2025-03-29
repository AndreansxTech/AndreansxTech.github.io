import React from 'react';
import { motion } from 'framer-motion';
import { IconBase } from 'react-icons';
import * as FaIcons from 'react-icons/fa';

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
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h2 className="fade-up">O mnie</h2>
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
                            Jestem uczniem szkoły średniej z silnym zainteresowaniem sieciami komputerowymi, 
                            administracją systemów i infrastrukturą centrum danych. Aktualnie rozwijam swoje 
                            umiejętności poprzez praktyczne doświadczenie z fizycznym sprzętem w moim środowisku 
                            homelab oraz oglądanie kursów dotyczących sieci.
                        </p>
                        <p>
                            Aktywnie uczę się podstawowych koncepcji objętych certyfikatem CompTIA Network+ 
                            w ramach szerszego zapoznania się z technologiami IT i sieciowymi.
                        </p>
                        
                        <div className="tech-icons" style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--accent)' }}>
                                <IconBase size={30}><FaIcons.FaNetworkWired /></IconBase>
                                <span style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Networking</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--accent)' }}>
                                <IconBase size={30}><FaIcons.FaServer /></IconBase>
                                <span style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Infrastructure</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--accent)' }}>
                                <IconBase size={30}><FaIcons.FaShieldAlt /></IconBase>
                                <span style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Security</span>
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
                        <h3>Cele zawodowe</h3>
                        <p>
                            Moim długoterminowym celem jest praca zawodowa w dziedzinie inżynierii sieciowej. 
                            Szczególnie interesuje mnie routing, przełączanie i skalowalna infrastruktura sieciowa. 
                            Aby przygotować się do tej ścieżki, skupiam się na budowaniu praktycznego doświadczenia 
                            i pogłębianiu wiedzy teoretycznej.
                        </p>

                        <h3>Umiejętności</h3>
                        <div className="skills-container">
                            {skills.map((skill, index) => (
                                <motion.div 
                                    key={index} 
                                    className="skill-badge"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true }}
                                >
                                    {skill}
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