import React, { useEffect, useRef } from 'react';
import { motion, TargetAndTransition } from 'framer-motion';
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
    
    // Ref to track scroll direction
    const lastScrollY = useRef<number>(0);
    // State to track if we've initialized the last scroll position
    const scrollInitialized = useRef<boolean>(false);
    
    useEffect(() => {
        // Set initial scroll position for accurate direction tracking
        lastScrollY.current = window.scrollY;
        scrollInitialized.current = true;
        
        // Track scroll direction
        const handleScroll = () => {
            lastScrollY.current = window.scrollY;
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    // Helper function to create animation based on inView and scroll direction
    const getScrollAnimation = (inView: boolean): TargetAndTransition => {
        // Only check direction if we've initialized the last scroll position
        const currentScrollY = window.scrollY;
        const scrollingDown = scrollInitialized.current ? currentScrollY > lastScrollY.current : true;
        
        if (!inView) {
            // When element leaves viewport, animation depends on scroll direction
            return {
                opacity: 0,
                y: scrollingDown ? 30 : -30, // Exits in opposite direction to scrolling
                transition: { duration: 0.3 }
            };
        }
        
        // When element enters viewport
        return {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        };
    };
    
    // Determine current scroll direction for initial state
    const isScrollingDown = (): boolean => {
        return scrollInitialized.current 
            ? window.scrollY > lastScrollY.current 
            : true;
    };
    
    // Initial animation properties based on scroll direction
    const getInitialYProps = (): TargetAndTransition => {
        const scrollDown = isScrollingDown();
        return {
            opacity: 0,
            y: scrollDown ? 30 : -30
        };
    };
    
    // Initial animation properties for x-axis motion when scrolling down
    const getInitialLeftProps = (): TargetAndTransition => {
        return {
            opacity: 0,
            x: -30
        };
    };
    
    // Initial animation properties for x-axis motion when scrolling up
    const getInitialRightProps = (): TargetAndTransition => {
        return {
            opacity: 0,
            x: 30
        };
    };
    
    return (
        <section id="about">
            <div className="container">
                <motion.div
                    initial={getInitialYProps()}
                    whileInView="visible"
                    variants={{
                        visible: (custom: boolean) => getScrollAnimation(true)
                    }}
                    custom={isScrollingDown()}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                >
                    <p className="intro" style={{ color: 'var(--accent)', fontFamily: 'var(--font-primary)', marginBottom: '1rem' }}>01. About Me</p>
                    <h2 className="fade-up">About Me</h2>
                </motion.div>
                
                <div className="about-content">
                    <motion.div
                        initial={getInitialLeftProps()}
                        whileInView="visible"
                        variants={{
                            visible: () => ({
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.7 }
                            })
                        }}
                        viewport={{ once: false, amount: 0.2 }}
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
                        initial={getInitialRightProps()}
                        whileInView="visible"
                        variants={{
                            visible: () => ({
                                opacity: 1,
                                x: 0,
                                transition: { duration: 0.7 }
                            })
                        }}
                        viewport={{ once: false, amount: 0.2 }}
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
                                    whileInView="visible"
                                    variants={{
                                        visible: (custom: boolean) => ({
                                            opacity: 1, 
                                            y: 0,
                                            transition: { delay: index * 0.1, duration: 0.5 }
                                        })
                                    }}
                                    custom={isScrollingDown()}
                                    viewport={{ once: false }}
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