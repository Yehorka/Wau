
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

<Trans
  i18nKey="text"
  components={{
    p: <p />,
    strong: <strong />,
    br: <br />
  }}
/>

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 lg:px-24 py-20">
      <div className="aspect-square bg-neutral-100">
        <img src="public/images/afisha.png" alt="Design inspiration" className="hero-image" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="section-title mb-6">{t('about.title')}</h2>
        <p className="text-sm leading-relaxed mb-8">
          {<Trans i18nKey='about.description'/>}
        </p>
                <h2 className="section-title mb-6">{t('about.mission_title')}</h2>
        <p className="text-sm leading-relaxed mb-8">
          {<Trans i18nKey='about.mission'/>}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
