import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaRedditAlien, FaTelegramPlane } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="container">
                <div className="social-links">
                    <motion.a 
                        href="https://github.com/AndreansxTech" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, color: 'var(--accent)' }}
                        transition={{ duration: 0.2 }}
                    >
                        {React.createElement(FaGithub as React.ElementType, { size: 22 })}
                    </motion.a>
                    <motion.a 
                        href="https://t.me/Andrtexh" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, color: 'var(--accent)' }}
                        transition={{ duration: 0.2 }}
                    >
                        {React.createElement(FaTelegramPlane as React.ElementType, { size: 22 })}
                    </motion.a>
                    <motion.a 
                        href="https://www.reddit.com/user/Acensxandrea/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ y: -5, color: 'var(--accent)' }}
                        transition={{ duration: 0.2 }}
                    >
                        {React.createElement(FaRedditAlien as React.ElementType, { size: 22 })}
                    </motion.a>
                </div>
                
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    style={{ marginTop: '1rem' }}
                >
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                        <span>Zaprojektowane i zbudowane przez AndreansxTech</span> 
                        {React.createElement(FaHeart as React.ElementType, { style: { color: 'var(--accent)', fontSize: '0.7rem' } })}
                    </p>
                </motion.div>
                
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    style={{ fontSize: '0.7rem', marginTop: '0.5rem', color: 'var(--text-secondary)', opacity: 0.7 }}
                >
                    &copy; {new Date().getFullYear()} AndreansxTech. Wszelkie prawa zastrzeżone.
                </motion.p>
            </div>
        </footer>
    );
};

export default Footer;