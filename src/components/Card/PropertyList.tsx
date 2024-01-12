import { useEffect, useState } from 'react';
import { useGetPropertiesFromLocationQuery } from '../../redux/api/homesApi';
import PropertyCard, { Image } from './PropertyCard';
import { Stack } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const PropertyList = () => {
  const { searchTerm } = useSelector((state: RootState) => state.searchParameters);
  // eslint-disable-next-line
  const { data, error, isLoading } = useGetPropertiesFromLocationQuery(searchTerm);

  // TODO: Remove this and use actual images of the houses
  const [images, setImages] = useState<Image[]>([]);
  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('https://picsum.photos/v2/list');
      const data = await response.json();
      const imageURLS = data.map(
        (image: { id: string; author: string; width: number; height: number; url: string; download_url: string }) => {
          return { url: image.url, description: image.author };
        },
      );
      setImages(imageURLS);
    };

    fetchImages();
  });

  return (
    <>
      <Stack>
        {data?.map((property) => (
          <PropertyCard
            key={property.id}
            title={property.title}
            description={property.description}
            images={images.slice(1, 5)}
          />
        ))}
      </Stack>
    </>
  );
};

export default PropertyList;
