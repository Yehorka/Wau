
import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-20">
      <h2 className="section-title mb-12">{t('contact.title')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-center">
        <div className="space-y-4">
          <div className="contact-item">
            <MapPin size={18} />
            <p>{t('contact.address')}</p>
          </div>
          <div className="contact-item">
            <Mail size={18} />
            <p>{t('contact.email')}</p>
          </div>
          <div className="contact-item">
            <Phone size={18} />
            <p>{t('contact.phone')}</p>
          </div>
        </div>
        
        <div className="md:justify-self-end md:text-right">
          <a
            href="#products"
            className="inline-block px-6 py-3 text-sm md:text-base font-medium uppercase tracking-widest text-white bg-black hover:bg-neutral-800 transition-colors rounded-full shadow-lg"
          >
            {t('hero.ctaButton')} {/* приклад: “Переглянути продукцію” */}
          </a>
        </div>
      </div>

      <div className="mt-8 space-y-4 text-sm">
        <div className="space-y-1">
          <p className="font-semibold">{t('contact.team.roman.line1')}</p>
          <p>{t('contact.team.roman.line2')}</p>
          <p>{t('contact.team.roman.line3')}</p>
          <p>{t('contact.team.roman.line4')}</p>
        </div>
        <div className="space-y-1">
          <p className="font-semibold">{t('contact.team.andrii.line1')}</p>
          <p>{t('contact.team.andrii.line2')}</p>
          <p>{t('contact.team.andrii.line3')}</p>
        </div>
        <div className="space-y-1">
          <p className="font-semibold">{t('contact.team.hirohisa.line1')}</p>
          <p>{t('contact.team.hirohisa.line2')}</p>
        </div>
      </div>

      <div className="border-t border-neutral-300 mt-12 pt-12">
        <div className="flex justify-between items-center">
          <p className="text-xs text-neutral-500">{t('contact.copyright')}</p>
          <div className="flex space-x-4">
            <a href="#" className="text-xs uppercase hover:text-neutral-500 transition-colors">{t('contact.social.instagram')}</a>
            <a href="#" className="text-xs uppercase hover:text-neutral-500 transition-colors">{t('contact.social.facebook')}</a>
            <a href="#" className="text-xs uppercase hover:text-neutral-500 transition-colors">{t('contact.social.pinterest')}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
