import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Dashboard.css';

const Dashboard = () => {
    const { t } = useTranslation();
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);

    // Ahi agregan la lista de los tickets
    /*
    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await fetch('/api/tickets'); 
                const data = await response.json();
                setTickets(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching tickets:', error);
                setLoading(false);
            }
        };
        fetchTickets();
    }, []);
    */

    if (loading) {
        return <div>{t('loading_message')}</div>;
    }

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">{t('dashboard_title')}</h1>
            <p className="dashboard-subtitle">{t('dashboard_subtitle')}</p>
            
            <div className="ticket-list">
                {tickets.length > 0 ? (
                    tickets.map(ticket => (
                        <div key={ticket.id} className="ticket-card">
                            <h3 className="ticket-subject">{ticket.subject}</h3>
                            <p className="ticket-status">{t('status')}: {ticket.status}</p>
                        </div>
                    ))
                ) : (
                    <p>{t('no_tickets_message')}</p>
                )}
            </div>
        </div>
    );
};

export default Dashboard;