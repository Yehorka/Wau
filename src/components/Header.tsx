
import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header className="py-6 px-6 md:px-12 lg:px-24">
      <div className="flex justify-between items-center">
        {/* Мобільне бургер-меню */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Десктопна навігація */}
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="text-sm uppercase tracking-widest hover:text-neutral-500 transition-colors">{t('header.about')}</a>
          <a href="#experience" className="text-sm uppercase tracking-widest hover:text-neutral-500 transition-colors">{t('header.experience')}</a>
          <a href="#products" className="text-sm uppercase tracking-widest hover:text-neutral-500 transition-colors">{t('header.products')}</a>
          <a href="#contact" className="text-sm uppercase tracking-widest hover:text-neutral-500 transition-colors">{t('header.contact')}</a>
        </nav>

        {/* Перемикач мови */}
        <div className="ml-auto md:ml-0">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Випадаюче меню для мобільної версії */}
      {isOpen && (
        <div className="flex flex-col mt-4 space-y-4 md:hidden">
          <a href="#about" onClick={toggleMenu} className="text-sm uppercase tracking-widest hover:text-neutral-500 transition-colors">{t('header.about')}</a>
          <a href="#experience" onClick={toggleMenu} className="text-sm uppercase tracking-widest hover:text-neutral-500 transition-colors">{t('header.experience')}</a>
          <a href="#products" onClick={toggleMenu} className="text-sm uppercase tracking-widest hover:text-neutral-500 transition-colors">{t('header.products')}</a>
          <a href="#contact" onClick={toggleMenu} className="text-sm uppercase tracking-widest hover:text-neutral-500 transition-colors">{t('header.contact')}</a>
        </div>
      )}
    </header>
  );
};

export default Header;
