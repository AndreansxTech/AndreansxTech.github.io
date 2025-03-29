import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} AndreansxTech. All rights reserved.</p>
            <div className="social-links">
                <a href="https://github.com/AndreansxTech" target="_blank" rel="noopener noreferrer">GitHub</a> | 
                <a href="https://t.me/Andrtexh" target="_blank" rel="noopener noreferrer">Telegram</a> |
                <a href="https://www.reddit.com/user/Acensxandrea/" target="_blank" rel="noopener noreferrer">Reddit</a>
            </div>
        </footer>
    );
};

export default Footer;