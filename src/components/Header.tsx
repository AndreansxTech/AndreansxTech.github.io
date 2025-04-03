import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    
    const { scrollY } = useScroll();
    const headerOpacity = useTransform(scrollY, [0, 100], [0.6, 0.85]); // Zwiększona nieprzezroczystość
    const headerBlur = useTransform(scrollY, [0, 100], [8, 15]); // Zwiększone rozmycie
    
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Sprawdź czy przewijamy w dół czy w górę
            if (currentScrollY > lastScrollY && currentScrollY > 300) {
                setHidden(true); // Schowaj nagłówek gdy przewijamy w dół i jesteśmy poniżej 300px
            } else {
                setHidden(false); // Pokaż nagłówek gdy przewijamy do góry
            }
            
            // Sprawdź czy przewinęliśmy już nieco w dół
            const isScrolled = currentScrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled, lastScrollY]);

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
        <motion.header
            style={{ 
                backgroundColor: scrolled ? `rgba(20, 20, 20, ${headerOpacity})` : 'rgba(20, 20, 20, 0.6)',
                backdropFilter: `blur(${headerBlur}px)`,
                WebkitBackdropFilter: `blur(${headerBlur}px)`,
                borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
                transition: 'transform 0.3s ease, background-color 0.3s ease'
            }}
            className={scrolled ? 'scrolled' : ''}
        >
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
        </motion.header>
    );
};

export default Header;