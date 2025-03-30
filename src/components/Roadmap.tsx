import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck, FaHourglassHalf, FaClock } from 'react-icons/fa';

const Roadmap: React.FC = () => {
    const roadmapItems = [
        { title: 'Introduction to networking', status: 'completed' },
        { title: 'Switching', status: 'completed' },
        { title: 'Routing', status: 'in-progress' },
        { title: 'Certyfikat CompTIA Network+', status: 'in-progress', isCertificate: true },
        { title: 'Pierwsza praca', status: 'future' },
        { title: 'Certyfikat MTCNA', status: 'future', isCertificate: true },
        { title: 'Certyfikat MTCRE', status: 'future', isCertificate: true }
    ];

    // Function to render appropriate status icon
    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'completed':
                return <FaCheck />;
            case 'in-progress':
                return <FaHourglassHalf />;
            case 'future':
                return <FaClock />;
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
                    <p className="intro" style={{ color: 'var(--accent)', fontFamily: 'var(--font-primary)', marginBottom: '1rem' }}>02. Career Journey</p>
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
                        paddingBottom: '3rem'
                    }}
                >
                    {/* Vertical line connecting roadmap items */}
                    <div 
                        style={{
                            position: 'absolute',
                            top: '10px',
                            bottom: '10px',
                            width: '2px',
                            backgroundColor: 'var(--accent)',
                            opacity: 0.3,
                            zIndex: 0
                        }}
                    />

                    {/* Roadmap items */}
                    {roadmapItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                width: '100%',
                                maxWidth: '600px',
                                margin: '1rem 0',
                                position: 'relative',
                                zIndex: 1
                            }}
                        >
                            {/* Status Circle */}
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
                                    fontSize: '1rem',
                                    marginRight: '1.5rem',
                                    boxShadow: '0 0 10px ' + getStatusColor(item.status)
                                }}
                            >
                                {getStatusIcon(item.status)}
                            </div>
                            
                            {/* Item Content */}
                            {item.isCertificate ? (
                                <div 
                                    style={{
                                        border: `2px solid ${getStatusColor(item.status)}`,
                                        borderRadius: '8px',
                                        padding: '1rem 1.5rem',
                                        backgroundColor: 'var(--bg-lighter)',
                                        boxShadow: `0 0 15px ${getStatusColor(item.status)}`,
                                        flex: 1,
                                        fontWeight: 600
                                    }}
                                >
                                    {item.title}
                                </div>
                            ) : (
                                <div 
                                    style={{
                                        padding: '0.75rem 0',
                                        flex: 1,
                                        fontWeight: 500
                                    }}
                                >
                                    {item.title}
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