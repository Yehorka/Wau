
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  <div dangerouslySetInnerHTML={{ __html: t('text') }} />
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side - Text content */}
        <div className="w-full md:w-1/3 flex flex-col justify-around">
{/* Title */}
  <h1 className="text-2xl font-medium tracking-wide">
    {t('hero.title')}
  </h1>

  {/* Subtitle */}
  <p className="text-sm uppercase tracking-wider">
    {t('hero.subtitle')}
  </p>

  {/* Taglines *
  <div className="space-y-2">
    <p className="text-lg font-light">{t('hero.tagline1')}</p>
    <p className="text-lg font-light">{t('hero.tagline2')}</p>
    <p className="text-lg font-light">{t('hero.tagline3')}</p>
  </div>*/}
    <div>
    <a
      href="#products"
      className="inline-block px-6 py-3 text-sm md:text-base font-medium uppercase tracking-widest text-white bg-black hover:bg-neutral-800 transition-colors rounded-full shadow-lg"
    >
      {t('hero.ctaButton')} {/* приклад: “Переглянути продукцію” */}
    </a>
  </div>
        </div>
        {/* Right side - Two images */}
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-neutral-300 h-full">
            <AspectRatio ratio={3/4} className="h-full">
              <img 
                src="images/DSC_6891-1.jpg" 
                alt={t('hero.image1Alt')} 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
          <div className="bg-neutral-200 h-full">
            <AspectRatio ratio={3/4} className="h-full">
              <img 
                src="images/DSC_6973-1.jpg" 
                alt={t('hero.image2Alt')} 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;