import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <p>
                Follow me on 
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"> GitHub</a> | 
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
            </p>
        </footer>
    );
};

export default Footer;