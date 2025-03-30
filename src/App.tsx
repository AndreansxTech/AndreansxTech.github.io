import React, { useEffect, useState, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Roadmap from './components/Roadmap';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { FaArrowUp } from 'react-icons/fa';
import './styles/index.css';

const App: React.FC = () => {
    const [showScrollIndicator, setShowScrollIndicator] = useState(false);
    const parallaxRef = useRef<HTMLDivElement>(null);
    const heroContentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scroll animations
        const handleScroll = () => {
            const elements = document.querySelectorAll('.fade-up');
            elements.forEach(element => {
                const position = element.getBoundingClientRect();
                // Check if element is in viewport
                if (position.top < window.innerHeight - 100) {
                    element.classList.add('appear');
                }
            });

            // Add scrolled class to header when scrolled
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header?.classList.add('scrolled');
            } else {
                header?.classList.remove('scrolled');
            }

            // Show/hide scroll indicator
            if (window.scrollY > 300) {
                setShowScrollIndicator(true);
            } else {
                setShowScrollIndicator(false);
            }

            // Parallax effect for hero section
            if (parallaxRef.current) {
                const scrollPosition = window.scrollY;
                parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
            }

            // Opacity effect for hero content based on scroll
            if (heroContentRef.current && window.scrollY < window.innerHeight) {
                const opacity = 1 - (window.scrollY / (window.innerHeight * 0.6));
                heroContentRef.current.style.opacity = Math.max(0, opacity).toString();
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once to check initial positions
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="app-container">
            <CustomCursor />
            <Header />
            <main>
                <section id="hero" className="parallax-container">
                    <div ref={parallaxRef} className="parallax-bg"></div>
                    <div ref={heroContentRef} className="container">
                        <p className="intro fade-up">Hi, my name is</p>
                        <h1 className="fade-up">Andreansx</h1>
                        <p className="fade-up">Aspiring Network Engineer</p>
                        <p className="description fade-up">
                            Passionately pursuing deep technical expertise in network infrastructure, 
                            routing, and data center environments.
                        </p>
                    </div>
                </section>
                <About />
                <Projects />
                <Roadmap />
                <Technologies />
                <Contact />
            </main>
            <Footer />
            
            <div 
                className={`scroll-indicator ${showScrollIndicator ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
                role="button"
                tabIndex={0}
            >
                {React.createElement(FaArrowUp as React.ElementType)}
            </div>
        </div>
    );
};

export default App;