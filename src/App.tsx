import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/index.css';

const App: React.FC = () => {
    return (
        <div className="app-container">
            <Header />
            <main>
                <section id="hero">
                    <h1>AndreansxTech</h1>
                    <p>Aspiring Network Engineer</p>
                </section>
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;