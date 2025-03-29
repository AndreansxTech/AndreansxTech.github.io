import React from 'react';
import { motion } from 'framer-motion';
import { IconBase } from 'react-icons';
import * as FaIcons from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <section id="contact">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                    style={{ textAlign: 'center' }}
                >
                    <p className="intro" style={{ color: 'var(--accent)', fontFamily: 'var(--font-primary)', marginBottom: '1rem' }}>04. Co dalej?</p>
                    <h2 className="fade-up">Skontaktuj się ze mną</h2>
                    
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        style={{ maxWidth: '600px', margin: '0 auto 3rem auto' }}
                    >
                        Obecnie skupiam się na pogłębianiu wiedzy o sieciach komputerowych i infrastrukturze IT.
                        Jeśli chcesz porozmawiać o sieciach, projektach lub współpracy, jestem otwarty na kontakt!
                    </motion.p>
                    
                    <motion.div 
                        className="social-links"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        style={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            gap: '2rem',
                            margin: '2rem 0' 
                        }}
                    >
                        <a 
                            href="https://t.me/Andrtexh" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                fontSize: '1.2rem',
                                color: 'var(--text-secondary)',
                                gap: '0.5rem'
                            }}
                        >
                            <IconBase size={20}><FaIcons.FaTelegramPlane /></IconBase>
                            <span>Telegram</span>
                        </a>
                        <a 
                            href="https://www.reddit.com/user/Acensxandrea/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                fontSize: '1.2rem',
                                color: 'var(--text-secondary)',
                                gap: '0.5rem'
                            }}
                        >
                            <IconBase size={20}><FaIcons.FaRedditAlien /></IconBase>
                            <span>Reddit</span>
                        </a>
                        <a 
                            href="https://github.com/AndreansxTech" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                fontSize: '1.2rem',
                                color: 'var(--text-secondary)',
                                gap: '0.5rem'
                            }}
                        >
                            <IconBase size={20}><FaIcons.FaGithub /></IconBase>
                            <span>GitHub</span>
                        </a>
                    </motion.div>
                    
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ 
                            scale: 1.05,
                            backgroundColor: 'rgba(100, 255, 218, 0.1)'
                        }}
                        style={{
                            marginTop: '2rem',
                            padding: '1rem 2.5rem'
                        }}
                        onClick={() => window.location.href = 'mailto:example@email.com'}
                    >
                        Wyślij wiadomość e-mail
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;