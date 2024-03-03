import { useNavigate } from 'react-router-dom';
import ParallaxBanner from '../../components/ParallaxBanner/ParallaxBanner';
import { useDispatch } from 'react-redux';
import { useGetPropertiesFromLocationQuery } from '../../redux/api/homesApi';
import { useEffect, useState } from 'react';
import { setCurrentProperties } from '../../redux/properties/property.reducer';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    data: properties,
    isFetching,
    isSuccess,
    error,
  } = useGetPropertiesFromLocationQuery(searchTerm, {
    skip: searchTerm === '',
  });

  useEffect(() => {
    if (isSuccess && properties) {
      // when the properties have been fetched, dispatch to reducer and redirect to the page to view those properties
      dispatch(setCurrentProperties(properties));
      navigate('/properties');
    }
  }, [isSuccess, properties, dispatch, navigate]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };
  return (
    <div className="h-full w-full flex flex-col">
      <ParallaxBanner onSubmit={handleSearch} />
    </div>
  );
};

export default Home;
