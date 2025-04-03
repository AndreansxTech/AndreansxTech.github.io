import React from 'react';
import { motion } from 'framer-motion';
import { FaTelegramPlane, FaRedditAlien, FaGithub } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <section id="contact">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                    style={{ textAlign: 'center' }}
                >
                    <p className="intro" style={{ color: 'var(--accent)', fontFamily: 'var(--font-primary)', marginBottom: '1rem' }}>04. What's Next?</p>
                    <h2 className="fade-up">Connect with Me</h2>
                    
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: false }}
                        style={{ maxWidth: '600px', margin: '0 auto 3rem auto' }}
                    >
                        Feel free to reach out if you share similar interests or want to discuss networking, 
                        certifications, or infrastructure topics. I'm always open to connecting with fellow 
                        enthusiasts in the field.
                    </motion.p>
                    
                    <motion.div 
                        className="social-links"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: false }}
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
                            {React.createElement(FaTelegramPlane as React.ElementType, { size: 20 })}
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
                            {React.createElement(FaRedditAlien as React.ElementType, { size: 20 })}
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
                            {React.createElement(FaGithub as React.ElementType, { size: 20 })}
                            <span>GitHub</span>
                        </a>
                    </motion.div>
                    
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: false }}
                        whileHover={{ 
                            scale: 1.05,
                            backgroundColor: 'rgba(100, 255, 218, 0.1)'
                        }}
                        style={{
                            marginTop: '2rem',
                            padding: '1rem 2.5rem'
                        }}
                        onClick={() => window.location.href = 'mailto:koliberekart@icloud.com'}
                    >
                        Send Email
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;