import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/inputs/Button/Button';
import { useAddPropertyToFavouritesMutation } from '../../redux/api/homesApi';
import { IProperty } from '../../types/Property.type';
import { formatDateString } from '../../utils/date';

interface PropertyDetails {
  property: IProperty;
}

export const PropertyDetails: React.FC<PropertyDetails> = ({ property }) => {
  const [addPropertyToFavourites] = useAddPropertyToFavouritesMutation();

  const navigate = useNavigate();

  const handleFavourite = async () => {
    if (!property.id) return;
    try {
      await addPropertyToFavourites(property.id).unwrap();
      navigate('/hub/myproperties');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-y-32">
      <div className="flex justify-between">
        <h3>{`${property.street}, ${property.postcode}`}</h3>
        <p>{`Date added: ${formatDateString(property.dateAdded ?? '')}`}</p>
      </div>

      <div className="flex justify-between">
        <p>{`Property Type: ${property.propertyType?.name ?? 'Unknown'}`}</p>
        <p>{`Size: ${property.squareMeeterage ?? 'Unknown'}`}</p>
        <p>{`Bedrooms: ${property.numberOfBedrooms ?? 'Unknown'}`}</p>
      </div>

      <div>
        <p>{property.fullDescription}</p>
      </div>

      <div className="flex justify-between">
        <p>{`Monthly Rent: ${property.monthlyRent}`}</p>
        <p>{`Property has a garden: ${property.hasGarden ? 'Yes' : 'No'}`}</p>
      </div>

      <div className="flex justify-between">
        <Button version="contain" isPrimary={true}>
          Contact Seller
        </Button>

        <Button version="outline" isPrimary={true} onClick={handleFavourite}>
          Favourite
        </Button>
      </div>
    </div>
  );
};
