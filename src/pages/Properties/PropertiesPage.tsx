import { useSelector } from 'react-redux';
import { MainLayout } from '../../layouts/mainLayout';
import { PropertyList } from './PropertyList';
import { type RootState } from '../../redux/store';

export const PropertiesPage = () => {
  const { currentProperties } = useSelector((state: RootState) => state.properties);
  return (
    <MainLayout>
      <PropertyList properties={currentProperties} />
    </MainLayout>
  );
};
