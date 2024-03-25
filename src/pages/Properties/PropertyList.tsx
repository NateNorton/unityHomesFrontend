import React from 'react';
import { PropertyCard } from '../../components/Card/PropertyCard';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';

const images = [
  {
    URL: 'https://picsum.photos/500/200',
    description: 'this is a description of the image',
  },
  {
    URL: 'https://picsum.photos/500/200',
    description: 'this is a description of the image',
  },
  {
    URL: 'https://picsum.photos/500/200',
    description: 'this is a description of the image',
  },
  {
    URL: 'https://picsum.photos/500/200',
    description: 'this is a description of the image',
  },
  {
    URL: 'https://picsum.photos/500/200',
    description: 'this is a description of the image',
  },
  {
    URL: 'https://picsum.photos/500/200',
    description: 'this is a description of the image',
  },
  {
    URL: 'https://picsum.photos/500/200',
    description: 'this is a description of the image',
  },
  {
    URL: 'https://picsum.photos/500/200',
    description: 'this is a description of the image',
  },
  {
    URL: 'https://picsum.photos/500/200',
    description: 'this is a description of the image',
  },
];

export const PropertyList: React.FC = () => {
  const { currentProperties } = useSelector((state: RootState) => state.properties);
  return (
    <div className="pr-10 pl-10 pt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
      {currentProperties.length === 0 && <h1>No properties found</h1>}
      {currentProperties.map((property, i) => (
        <PropertyCard key={i} property={property} images={images} />
      ))}
    </div>
  );
};
