import React, { useEffect, useRef } from 'react';
import { motion, TargetAndTransition } from 'framer-motion';
import { 
    FaGithub
} from 'react-icons/fa';
import { 
    SiMikrotik, 
    SiCloudflare,
    SiDebian
} from 'react-icons/si';

const Technologies: React.FC = () => {
    const techItems = [
        { 
            name: "MikroTik", 
            icon: SiMikrotik, 
            color: "#f5f3f0",
            description: "Reliable networking solutions that offer great value for money. I love their flexibility in configuration and advanced routing features."
        },
        { 
            name: "Debian", 
            icon: SiDebian, 
            color: "#A80030",
            description: "A stable and secure operating system, ideal for servers. I value it for its reliability and the availability of software repositories."
        },
        { 
            name: "GitHub", 
            icon: FaGithub, 
            color: "#ffffff",
            description: "An essential tool for project collaboration and version control. I use it to store all my projects and learn from the community."
        },
        { 
            name: "Cloudflare", 
            icon: SiCloudflare, 
            color: "#F48120",
            description: "A service that ensures website security and performance. I use it to secure my services and accelerate access to them."
        }
    ];

    // Ref for scroll animations
    const techSectionRef = useRef<HTMLDivElement>(null);
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

        // Observer for the main section with dynamic animations based on scroll direction
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const currentScrollY = window.scrollY;
                const scrollingDown = currentScrollY > lastScrollY.current;
                
                if (entry.isIntersecting) {
                    // Element is entering viewport
                    if (scrollingDown) {
                        // Scrolling down - animate from bottom
                        entry.target.classList.add('visible-from-bottom');
                        entry.target.classList.remove('visible-from-top');
                    } else {
                        // Scrolling up - animate from top
                        entry.target.classList.add('visible-from-top');
                        entry.target.classList.remove('visible-from-bottom');
                    }
                } else {
                    // Element is leaving viewport
                    entry.target.classList.remove('visible-from-top', 'visible-from-bottom');
                }
            });
        }, { threshold: 0.1 });

        // Observer for cards with dynamic animations and delays
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                const currentScrollY = window.scrollY;
                // Only check direction once we have initialized the last scroll position
                const scrollingDown = scrollInitialized.current ? currentScrollY > lastScrollY.current : true;
                
                if (entry.isIntersecting) {
                    // Element is entering viewport
                    setTimeout(() => {
                        if (scrollingDown) {
                            // Scrolling down - animate from bottom
                            entry.target.classList.add('visible-from-bottom');
                            entry.target.classList.remove('visible-from-top');
                        } else {
                            // Scrolling up - animate from top
                            entry.target.classList.add('visible-from-top');
                            entry.target.classList.remove('visible-from-bottom');
                        }
                    }, index * 100);
                } else {
                    // Element is leaving viewport
                    entry.target.classList.remove('visible-from-top', 'visible-from-bottom');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        // Observe the section
        if (techSectionRef.current) {
            observer.observe(techSectionRef.current);
        }

        // Observe all cards
        document.querySelectorAll('.tech-card').forEach(card => {
            cardObserver.observe(card);
        });

        return () => {
            observer.disconnect();
            cardObserver.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Helper function to create animation based on inView and scroll direction
    const getScrollAnimation = (inView: boolean): TargetAndTransition => {
        // Only check direction if we've initialized the last scroll position
        const currentScrollY = window.scrollY;
        // Odwrócona logika - przy scrollowaniu w dół animujemy od dołu, przy scrollowaniu w górę animujemy od góry
        const scrollingDown = scrollInitialized.current ? currentScrollY > lastScrollY.current : true;
        
        if (!inView) {
            // Gdy element wychodzi z widoku, animacja zależy od kierunku przewijania
            return {
                opacity: 0,
                y: scrollingDown ? 30 : -30, // Wyjeżdża w przeciwnym kierunku niż przewijanie
                transition: { duration: 0.3 }
            };
        }
        
        // Gdy element wchodzi w widok
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
    const getInitialProps = (): TargetAndTransition => {
        const scrollDown = isScrollingDown();
        return {
            opacity: 0,
            y: scrollDown ? 30 : -30
        };
    };

    return (
        <section id="technologies" className="animated-bg">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }} /* zmiana z once: true na once: false */
                    style={{ textAlign: 'center', width: '100%' }}
                >
                    <p className="intro" style={{ color: 'var(--accent)', fontFamily: 'var(--font-primary)', marginBottom: '1rem' }}>04. Tools & Technologies</p>
                    <h2 className="fade-up">Technologies I Use & Admire</h2>
                </motion.div>
                
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: false }} /* zmiana z once: true na once: false */
                    style={{ maxWidth: '700px', margin: '0 auto 3rem', textAlign: 'center' }}
                >
                    Here are some of the technologies, platforms, and vendors that shape my learning journey 
                    and infrastructure approach. I'm particularly focused on networking technologies and
                    enterprise-grade solutions.
                </motion.p>

                <div ref={techSectionRef} className="tech-grid scroll-reveal">
                    {techItems.map((tech, index) => (
                        <motion.div 
                            key={index}
                            className="tech-card"
                            initial={getInitialProps()}
                            whileInView="visible"
                            variants={{
                                visible: (custom: boolean) => getScrollAnimation(true)
                            }}
                            custom={isScrollingDown()}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            viewport={{ once: false, amount: 0.1 }} /* zmiana z once: true na once: false */
                            whileHover={{ y: -5 }}
                        >
                            <div className="tech-icon">
                                {React.createElement(tech.icon as React.ElementType, { 
                                    size: 48,
                                    color: tech.color
                                })}
                            </div>
                            <div className="tech-card-content">
                                <h3>{tech.name}</h3>
                                <p>{tech.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;
