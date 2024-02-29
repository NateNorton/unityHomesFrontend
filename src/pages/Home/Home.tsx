// import { useDispatch } from 'react-redux';
import ParallaxBanner from '../../components/ParallaxBanner/ParallaxBanner';
// import SearchBox from '../../components/SearchBox/SearchBox';
// import { AppDispatch } from '../../redux/store';
// import { setSearchTerm } from '../../redux/search/property.reducer';
// import { useNavigate } from 'react-router-dom';
// import { Container, Row } from 'react-bootstrap';

const Home = () => {
  // const dispatch = useDispatch<AppDispatch>();
  // const navigate = useNavigate();

  // const handlesearchChange = (term: string) => {
  //   dispatch(setSearchTerm(term));
  // };

  // const handleSearchSubmit = () => {
  //   navigate('/properties');
  // };

  return (
    <div className="h-full w-full flex flex-col">
      <ParallaxBanner />
    </div>
    // <Container fluid>
    //   <Row>
    //     <ParallaxBanner />
    //   </Row>
    //   <Row>
    //     <SearchBox setSearchTerm={handlesearchChange} handleSubmit={handleSearchSubmit} />
    //   </Row>
    // </Container>
  );
};

export default Home;
