import { useGetPropertyFromIDQuery } from '../../redux/api/homesApi';
import { PropertyDetails } from './PropertyDetails';

export const PropertyDetailsPage = () => {
  const { data: property } = useGetPropertyFromIDQuery(parseInt(location.pathname.split('/')[2]));
  return (
    <div className="text-darkest flex p-10 items-center justify-center">
      {property && <PropertyDetails property={property} />}
    </div>
  );
};
