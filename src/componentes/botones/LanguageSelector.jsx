import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button 
      onClick={toggleLanguage} 
      className="language-btn"
      variant="light"
    >
      {i18n.language === 'en' ? 'Español' : 'English'}
    </Button>
  );
};

export default LanguageSelector;