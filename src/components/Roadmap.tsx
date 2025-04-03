import React, { useEffect, useRef } from 'react';
import { motion, TargetAndTransition } from 'framer-motion';
import { 
    FaCheck, 
    FaHourglassHalf, 
    FaClock, 
    FaExchangeAlt, 
    FaRoute, 
    FaBriefcase,
    FaNetworkWired,
    FaGraduationCap
} from 'react-icons/fa';
import { 
    SiMikrotik,
    SiComptia
} from 'react-icons/si';

import { BsFillHddNetworkFill } from 'react-icons/bs';

const Roadmap: React.FC = () => {
    const roadmapItems = [
        { 
            title: 'Introduction to networking', 
            status: 'completed', 
            icon: FaNetworkWired 
        },
        { 
            title: 'Switching', 
            status: 'completed', 
            icon: FaExchangeAlt 
        },
        { 
            title: 'Routing', 
            status: 'in-progress', 
            icon: FaRoute 
        },
        { 
            title: 'CompTIA Network+ Certification', 
            status: 'in-progress', 
            isCertificate: true, 
            icon: SiComptia
        },
        { 
            title: 'First job', 
            status: 'future', 
            icon: FaBriefcase 
        },
        { 
            title: 'MTCNA Certification', 
            status: 'future', 
            isCertificate: true, 
            icon: SiMikrotik 
        },
        { 
            title: 'MTCRE Certification', 
            status: 'future', 
            isCertificate: true, 
            icon: SiMikrotik 
        }
    ];

    // Ref to track scroll direction
    const lastScrollY = useRef<number>(0);
    // Ref for the roadmap container
    const roadmapRef = useRef<HTMLDivElement>(null);
    // State to track if we've initialized the last scroll position
    const scrollInitialized = useRef<boolean>(false);
    // Ref for the animation process
    const animationInProgress = useRef<boolean>(false);

    useEffect(() => {
        // Set initial scroll position for accurate direction tracking
        lastScrollY.current = window.scrollY;
        scrollInitialized.current = true;
        
        // Track scroll direction
        const handleScroll = () => {
            lastScrollY.current = window.scrollY;
        };
        
        window.addEventListener('scroll', handleScroll);

        // Observer for the whole roadmap section
        const sectionObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !animationInProgress.current) {
                animateRoadmapItems();
            } else if (!entries[0].isIntersecting) {
                // Reset visibility of items when section is out of view
                document.querySelectorAll('.roadmap-item').forEach(item => {
                    item.classList.remove('visible');
                });
            }
        }, { threshold: 0.1 });

        if (roadmapRef.current) {
            sectionObserver.observe(roadmapRef.current);
        }

        // Function to animate roadmap items based on scroll direction
        const animateRoadmapItems = () => {
            const currentScrollY = window.scrollY;
            const scrollingDown = scrollInitialized.current ? currentScrollY > lastScrollY.current : true;
            
            animationInProgress.current = true;
            
            // Get all roadmap items
            const roadmapItems = document.querySelectorAll('.roadmap-item');
            const allItems = Array.from(roadmapItems);
            
            // For scrolling direction:
            // When scrolling DOWN, animate from top to bottom (normal order)
            // When scrolling UP, animate from bottom to top (reversed order)
            const itemsToAnimate = scrollingDown ? allItems : [...allItems].reverse();
            
            // Reset all items first
            allItems.forEach(item => item.classList.remove('visible'));
            
            // Animate each item with delay
            itemsToAnimate.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('visible');
                    
                    // If this is the last item, mark animation as complete
                    if (index === itemsToAnimate.length - 1) {
                        setTimeout(() => {
                            animationInProgress.current = false;
                        }, 500); // Short delay after last animation
                    }
                }, index * 150); // 150ms staggered delay
            });
        };

        return () => {
            sectionObserver.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to render appropriate status icon
    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'completed':
                return React.createElement(FaCheck as React.ElementType);
            case 'in-progress':
                return React.createElement(FaHourglassHalf as React.ElementType);
            case 'future':
                return React.createElement(FaClock as React.ElementType);
            default:
                return null;
        }
    };

    // Function to get status color
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed':
                return '#4EAA25'; // Green
            case 'in-progress':
                return '#F9A826'; // Yellow/Orange
            case 'future':
                return '#808080'; // Gray
            default:
                return '#808080';
        }
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
            y: scrollDown ? 20 : -20
        };
    };

    return (
        <section id="roadmap">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                    style={{ textAlign: 'center' }}
                >
                    <p className="intro" style={{ color: 'var(--accent)', fontFamily: 'var(--font-primary)', marginBottom: '1rem' }}>03. Career Journey</p>
                    <h2 className="fade-up">My Learning Roadmap</h2>
                </motion.div>
                
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: false }}
                    style={{ maxWidth: '700px', margin: '0 auto 3rem', textAlign: 'center' }}
                >
                    A visualization of my professional development path in networking and infrastructure technology.
                </motion.p>

                <motion.div 
                    className="roadmap-container"
                    ref={roadmapRef}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        position: 'relative',
                        paddingBottom: '3rem',
                        width: '100%',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}
                >
                    {/* Add CSS styles for animation */}
                    <style>
                    {`
                        .roadmap-item {
                            opacity: 0;
                            transform: translateY(20px);
                            transition: opacity 0.5s ease, transform 0.5s ease;
                        }
                        
                        .roadmap-item.visible {
                            opacity: 1;
                            transform: translateY(0);
                        }
                        
                        .roadmap-item.from-bottom {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        
                        .roadmap-item.from-top {
                            opacity: 0;
                            transform: translateY(-20px);
                        }
                        
                        @keyframes fadeInFromBottom {
                            from {
                                opacity: 0;
                                transform: translateY(20px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                        
                        @keyframes fadeInFromTop {
                            from {
                                opacity: 0;
                                transform: translateY(-20px);
                            }
                            to {
                                opacity: 1;
                                transform: translateY(0);
                            }
                        }
                    `}
                    </style>
                
                    {/* Roadmap items - vertical layout */}
                    {roadmapItems.map((item, index) => (
                        <div
                            key={index}
                            className="roadmap-item"
                            style={{
                                width: '100%',
                                margin: '0.75rem 0',
                                position: 'relative',
                                zIndex: 1
                            }}
                        >
                            {item.isCertificate ? (
                                // Certificate item - larger box
                                <div 
                                    style={{
                                        border: `2px solid ${getStatusColor(item.status)}`,
                                        borderRadius: '12px',
                                        padding: '1.5rem',
                                        backgroundColor: 'var(--bg-secondary)',
                                        boxShadow: `0 0 15px rgba(${item.status === 'completed' ? '78, 170, 37' : item.status === 'in-progress' ? '249, 168, 38' : '128, 128, 128'}, 0.2)`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        minHeight: '100px', // Taller height for certificate boxes
                                    }}
                                >
                                    {/* Status indicator */}
                                    <div 
                                        style={{
                                            width: '50px',
                                            height: '50px',
                                            borderRadius: '50%',
                                            backgroundColor: getStatusColor(item.status),
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontSize: '1.5rem',
                                            marginRight: '1.5rem',
                                            boxShadow: '0 0 10px ' + getStatusColor(item.status),
                                            flexShrink: 0
                                        }}
                                    >
                                        {getStatusIcon(item.status)}
                                    </div>

                                    {/* Certificate icon */}
                                    <div 
                                        style={{
                                            fontSize: '3rem',
                                            color: getStatusColor(item.status), 
                                            marginRight: '1.5rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}
                                    >
                                        {React.createElement(item.icon as React.ElementType)}
                                    </div>

                                    {/* Title */}
                                    <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>
                                        {item.title}
                                    </div>
                                </div>
                            ) : (
                                // Regular item - standard row
                                <div 
                                    style={{
                                        padding: '1rem 1.5rem',
                                        backgroundColor: 'var(--bg-secondary)',
                                        borderRadius: '8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    {/* Status indicator */}
                                    <div 
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            backgroundColor: getStatusColor(item.status),
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontSize: '1.4rem',
                                            marginRight: '1.5rem',
                                            boxShadow: '0 0 10px ' + getStatusColor(item.status),
                                            flexShrink: 0
                                        }}
                                    >
                                        {getStatusIcon(item.status)}
                                    </div>

                                    {/* Item icon */}
                                    <div 
                                        style={{
                                            fontSize: '2.25rem',
                                            color: getStatusColor(item.status), 
                                            marginRight: '1.5rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}
                                    >
                                        {React.createElement(item.icon as React.ElementType)}
                                    </div>

                                    {/* Title */}
                                    <div style={{ fontWeight: 500 }}>
                                        {item.title}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Future dots */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '1rem 0' }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent)', margin: '0 4px' }} />
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent)', margin: '0 4px' }} />
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent)', margin: '0 4px' }} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Roadmap;