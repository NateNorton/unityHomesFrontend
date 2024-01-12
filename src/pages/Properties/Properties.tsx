import { Container, Row } from 'react-bootstrap';
import SearchBox from '../../components/SearchBox/SearchBox';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { setSearchTerm } from '../../redux/search/property.reducer';
import PropertyList from '../../components/Card/PropertyList';

const Properties = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSearchTermChange = (term: string) => {
    dispatch(setSearchTerm(term));
  };

  return (
    <Container>
      <Row>
        <SearchBox setSearchTerm={handleSearchTermChange} />
      </Row>

      <Row>
        <PropertyList />
      </Row>
    </Container>
  );
};

export default Properties;
