
import React from 'react';
import { useTranslation } from 'react-i18next';

const ExperienceSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="px-6 md:px-12 lg:px-24 py-20 bg-neutral-100 space-y-4"
    >
      <h3 className="section-title text-2xl md:text-3xl mb-6">
        {t('experience.title')}
      </h3>
      <p>{t('experience.paragraph1')}</p>
      <p>{t('experience.paragraph2')}</p>
      <p>{t('experience.paragraph3')}</p>
      <p className="font-semibold">{t('experience.listHeading')}</p>
      <ul className="list-disc list-inside space-y-2">
        <li>{t('experience.list.item1')}</li>
        <li>{t('experience.list.item2')}</li>
        <li>{t('experience.list.item3')}</li>
        <li>{t('experience.list.item4')}</li>
      </ul>
      <p>{t('experience.paragraph4')}</p>
      <p>{t('experience.paragraph5')}</p>
      <p>{t('experience.paragraph6')}</p>
    </section>
  );
};

export default ExperienceSection;
