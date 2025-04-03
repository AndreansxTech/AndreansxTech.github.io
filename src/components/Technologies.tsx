import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
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
            description: "Niezawodne rozwiązania sieciowe, które oferują świetny stosunek ceny do możliwości. Uwielbiam ich elastyczność w konfiguracji i zaawansowane funkcje routingu."
        },
        { 
            name: "Debian", 
            icon: SiDebian, 
            color: "#A80030",
            description: "Stabilny i bezpieczny system operacyjny, idealny dla serwerów. Cenię go za jego niezawodność i dostępne repozytoria oprogramowania."
        },
        { 
            name: "GitHub", 
            icon: FaGithub, 
            color: "#ffffff",
            description: "Narzędzie niezbędne do współpracy nad projektami i kontroli wersji. Korzystam z niego do przechowywania wszystkich moich projektów i nauki od społeczności."
        },
        { 
            name: "Cloudflare", 
            icon: SiCloudflare, 
            color: "#F48120",
            description: "Usługa zapewniająca bezpieczeństwo i wydajność stron. Wykorzystuję ją do zabezpieczania moich serwisów oraz przyspieszania dostępu do nich."
        }
    ];

    // Ref dla scroll animations
    const techSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Observer dla głównej sekcji
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        // Observer dla kart z opóźnieniami
        const cardObserver = new IntersectionObserver(entries => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Dodaj opóźnienie bazując na indeksie
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        // Obserwuj sekcję
        if (techSectionRef.current) {
            observer.observe(techSectionRef.current);
        }

        // Obserwuj wszystkie karty
        document.querySelectorAll('.tech-card').forEach(card => {
            cardObserver.observe(card);
        });

        return () => {
            observer.disconnect();
            cardObserver.disconnect();
        };
    }, []);

    return (
        <section id="technologies" className="animated-bg">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                    style={{ textAlign: 'center', width: '100%' }}
                >
                    <p className="intro" style={{ color: 'var(--accent)', fontFamily: 'var(--font-primary)', marginBottom: '1rem' }}>04. Tools & Technologies</p>
                    <h2 className="fade-up">Technologies I Use & Admire</h2>
                </motion.div>
                
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
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
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.1 }}
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
