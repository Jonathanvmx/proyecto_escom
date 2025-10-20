import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form } from 'react-bootstrap';
import './RegisterStyle.css';
import { Link } from 'react-router-dom';
import CompanyDropdown from './dropdown/CompanyDropdown';

const Register = () => {
    const { t } = useTranslation();
    const [selectedCompany, setSelectedCompany] = useState('');
    const handleCompanyChange = (e) => {
        setSelectedCompany(e.target.value);
    };

    return (
        <div className="login-wrapper">
            <div className="login-card-container">
                <h2 className="register-title">{t('register_title')}</h2>
                <div className="login-card-content">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Control
                                type="text"
                                placeholder={t('name_placeholder')}
                                className="custom-input"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                placeholder={t('email_placeholder')}
                                className="custom-input"
                            />
                        </Form.Group>

                        <CompanyDropdown
                            selectedCompany={selectedCompany}
                            onCompanyChange={handleCompanyChange}
                        />

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control
                                type="password"
                                placeholder={t('password_placeholder')}
                                className="custom-input"
                            />
                        </Form.Group>
                    </Form>
                </div>
            </div>

            <div className="button-container">
                <Button variant="primary" type="submit" className="login-btn">
                    {t('register_button')}
                </Button>
            </div>

            <div className="link-container">
                <Link to="/" className="vinculo">
                    {t('have_account_link')}
                </Link>
            </div>
        </div>
    );
};

export default Register;