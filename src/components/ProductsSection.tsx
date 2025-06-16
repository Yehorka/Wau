import React from 'react';
import { useTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';

const getProducts = (t: TFunction) => [
  {
    title: t('products.items.item1.title'),
    description: t('products.items.item1.description'),
  },
  {
    title: t('products.items.item2.title'),
    description: t('products.items.item2.description'),
  },
  {
    title: t('products.items.item3.title'),
    description: t('products.items.item3.description'),
  },
  {
    title: t('products.items.item4.title'),
    description: t('products.items.item4.description'),
  },
  {
    title: t('products.items.item5.title'),
    description: t('products.items.item5.description'),
  },
  {
    title: t('products.items.item6.title'),
    description: t('products.items.item6.description'),
  },
  {
    title: t('products.items.item7.title'),
    description: t('products.items.item7.description'),
  },
];

const ProductsSection: React.FC = () => {
  const { t } = useTranslation();
  const products = getProducts(t);
  return (
    <section id="products" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="text-center mb-8">
        <h2 className="japanese-text text-3xl md:text-4xl lg:text-5xl font-medium mb-2">
          {t('products.sectionTitle')}
        </h2>
        <p className="text-sm text-gray-600">
          {t('products.sectionSubtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.title}
            className="border border-gray-200 rounded-lg shadow-sm hover:shadow-lg p-4 transition duration-300"
          >
            <img
              src="/placeholder.png"
              alt=""
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="#"
          className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
        >
          {t('products.cta')}
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        <div>
          <h3 className="text-2xl font-bold mb-2">{t('products.artTitle')}</h3>
          <p className="text-sm text-gray-600 mb-2">
            {t('products.artDescription')}
          </p>
          <a
            href="#"
            className="text-blue-600 underline hover:text-blue-800"
          >
            {t('products.artLink')}
          </a>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2">{t('products.nftTitle')}</h3>
          <p className="text-sm text-gray-600 mb-2">
            {t('products.nftDescription')}
          </p>
          <a
            href="#"
            className="text-blue-600 underline hover:text-blue-800"
          >
            {t('products.nftLink')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
