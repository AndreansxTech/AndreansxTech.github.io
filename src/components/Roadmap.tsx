import React from 'react';
import { motion } from 'framer-motion';
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

    return (
        <section id="roadmap">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                    style={{ textAlign: 'center' }}
                >
                    <p className="intro" style={{ color: 'var(--accent)', fontFamily: 'var(--font-primary)', marginBottom: '1rem' }}>03. Career Journey</p>
                    <h2 className="fade-up">My Learning Roadmap</h2>
                </motion.div>
                
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    style={{ maxWidth: '700px', margin: '0 auto 3rem', textAlign: 'center' }}
                >
                    A visualization of my professional development path in networking and infrastructure technology.
                </motion.p>

                <motion.div 
                    className="roadmap-container"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
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
                    {/* Roadmap items - vertical layout */}
                    {roadmapItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
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
                                        backgroundColor: 'var(--bg-lighter)',
                                        boxShadow: `0 0 15px ${getStatusColor(item.status)}`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        minHeight: '100px', // Taller height for certificate boxes
                                    }}
                                >
                                    {/* Status indicator */}
                                    <div 
                                        style={{
                                            width: '50px', // Increased from 40px
                                            height: '50px', // Increased from 40px
                                            borderRadius: '50%',
                                            backgroundColor: getStatusColor(item.status),
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontSize: '1.5rem', // Increased from 1rem
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
                                            fontSize: '3rem', // Increased from 2rem
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
                                        backgroundColor: 'var(--bg-lighter)',
                                        borderRadius: '8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    {/* Status indicator */}
                                    <div 
                                        style={{
                                            width: '40px', // Increased from 40px
                                            height: '40px', // Increased from 40px
                                            borderRadius: '50%',
                                            backgroundColor: getStatusColor(item.status),
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontSize: '1.4rem', // Increased from 1rem
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
                                            fontSize: '2.25rem', // Increased from 1.5rem
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
                        </motion.div>
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