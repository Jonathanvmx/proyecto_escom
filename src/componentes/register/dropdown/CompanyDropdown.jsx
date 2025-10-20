import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Form } from 'react-bootstrap';
import './CompanyDropdownStyle.css';

const CompanyDropdown = () => {
    const [companies, setCompanies] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState('');
    const { t } = useTranslation();

    return (
        <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Select
                className="custom-input" 
                value={selectedCompany} 
                onChange={(e) => setSelectedCompany(e.target.value)}
            >
                <option value="">{t('select_company_placeholder')}</option>
                
                {companies.map((company) => (
                    <option key={company.id} value={company.id}>
                        {company.name}
                    </option>
                ))}
            </Form.Select>
        </Form.Group>
    );
};

export default CompanyDropdown;