import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form } from 'react-bootstrap';
import './LoginStyle.css';
import { Link } from 'react-router-dom';

const LoginCard = () => {
    const { t } = useTranslation();

    return (
        <div className="login-wrapper">
            <div className="login-card-container">
                <h2 className="login-title">{t('login_title')}</h2>
                <div className="login-card-content">
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder={t('email_placeholder')} className="custom-input" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="password" placeholder={t('password_placeholder')} className="custom-input" />
                        </Form.Group>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <Form.Check type="checkbox" label={t('remember_me')} />
                            <a href="#" className="forgot-password">{t('forgot_password')}</a>
                        </div>
                    </Form>
                </div>
            </div>
            <div className="button-container">
                <Link to="/Dashboard" className="dashboard">
                    <Button variant="primary" type="submit" className="login-btn">
                        {t('login_button')}
                    </Button>
                </Link>
            </div>
            <div className="no-cuenta">
                <Link to="/Register" className="vinculo">
                    {t('vinculo')}
                </Link>
            </div>
        </div>
    );
};

export default LoginCard;