import React from 'react';
import { useTranslation } from 'react-i18next';

const NFTArtSection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="nft-art" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2">
          <h3 className="text-2xl md:text-4xl font-bold mb-4">
            {t('nftArt.title')}
          </h3>
          <p className="text-sm md:text-base text-gray-600 mb-2 whitespace-pre-line">
            {t('nftArt.description')}
          </p>
          <a href="#" className="text-blue-600 underline hover:text-blue-800">
            {t('nftArt.link')}
          </a>
        </div>
        <img
          src="/placeholder-nft.jpg"
          alt=""
          className="w-full md:w-1/2 rounded shadow"
        />
      </div>
    </section>
  );
};

export default NFTArtSection;
