import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Roadmap", href: "#roadmap" },
        { name: "Technologies", href: "#technologies" },
        { name: "Contact", href: "#contact" }
    ];

    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                staggerChildren: 0.1,
                duration: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <header>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <motion.div 
                        className="logo"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        A<span style={{ color: 'var(--accent)' }}>.</span>
                    </motion.div>
                    
                    <motion.nav
                        initial="hidden"
                        animate="visible"
                        variants={navVariants}
                    >
                        <ul>
                            {navItems.map((item, index) => (
                                <motion.li key={index} variants={itemVariants}>
                                    <a href={item.href}>
                                        <span style={{ color: 'var(--accent)' }}>0{index + 1}. </span>
                                        {item.name}
                                    </a>
                                </motion.li>
                            ))}
                            <motion.li variants={itemVariants}>
                                <a href="https://github.com/AndreansxTech" target="_blank" rel="noopener noreferrer" 
                                   style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                    {React.createElement(FaGithub as React.ElementType)}
                                </a>
                            </motion.li>
                        </ul>
                    </motion.nav>

                    {/* Mobile Menu Button - will implement functionality later if needed */}
                    <div className="mobile-menu-button" 
                         style={{ display: 'none', cursor: 'pointer' }}
                         onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <div style={{ width: '25px', height: '2px', backgroundColor: 'var(--text-primary)', margin: '5px 0' }}></div>
                        <div style={{ width: '25px', height: '2px', backgroundColor: 'var(--text-primary)', margin: '5px 0' }}></div>
                        <div style={{ width: '25px', height: '2px', backgroundColor: 'var(--text-primary)', margin: '5px 0' }}></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;