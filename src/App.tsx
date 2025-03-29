import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { IconBase } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import './styles/index.css';

const App: React.FC = () => {
    const [showScrollIndicator, setShowScrollIndicator] = useState(false);

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
                <section id="hero">
                    <div className="container">
                        <p className="intro fade-up">Cześć, nazywam się</p>
                        <h1 className="fade-up">AndreansxTech</h1>
                        <p className="fade-up">Aspiring Network Engineer</p>
                        <p className="description fade-up">
                            Pasjonat sieci komputerowych, specjalizujący się w infrastrukturze sieciowej,
                            routingu i środowiskach centrów danych.
                        </p>
                    </div>
                </section>
                <About />
                <Projects />
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
                <IconBase><FaIcons.FaArrowUp /></IconBase>
            </div>
        </div>
    );
};

export default App;