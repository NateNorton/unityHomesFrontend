import { Button } from '../../components/inputs/Button/Button';
import { useDeleteFromFavouritesMutation, useGetFavouritePropertiesQuery } from '../../redux/api/homesApi';

export const MyProperties: React.FC = () => {
  const { data: properties, isLoading } = useGetFavouritePropertiesQuery();
  const [deleteFromFavourites] = useDeleteFromFavouritesMutation();

  const handleRemoveFromFavourites = (propertyId?: number) => {
    if (!propertyId) return;
    try {
      deleteFromFavourites(propertyId).unwrap();
      // refresh page
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="w-full h-full flex flex-col gap-y-10 p-20">
      {!properties || properties.length === 0 ? (
        <h1>You have not added any properties to your favourites yet</h1>
      ) : null}
      <div className="grid grid-col-3">
        {properties?.map((property) => (
          <div key={property.id} className="flex flex-col gap-y-2">
            <div className="flex flex-col space-y-2 md:w-1/2 justify-center rounded-lg p-2 shadow-xl bg-mutedSage">
              <h2>{property.title}</h2>
              <p>House</p>
              <div className="border-sageDark border-2 rounded p-2 md:p-3">
                <p>{property.description}</p>
              </div>
              <Button version="text" isPrimary={false} onClick={() => handleRemoveFromFavourites(property.id)}>
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
