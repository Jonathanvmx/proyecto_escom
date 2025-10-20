import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SlidebarMenu.css';

const SidebarMenu = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar-container ${isOpen ? 'open' : ''}`}>
            <button className="menu-toggle-btn" onClick={toggleMenu}>
                {isOpen ? '✕' : '☰'}
            </button>

            <Nav className="flex-column sidebar-nav">
                <Nav.Item>
                    <Link to="/dashboard" className="nav-link">
                        {t('menu_dashboard')}
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/tickets" className="nav-link">
                        {t('menu_tickets')}
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to="/profile" className="nav-link">
                        {t('menu_profile')}
                    </Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default SidebarMenu;