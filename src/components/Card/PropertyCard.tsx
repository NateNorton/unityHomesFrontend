import { IProperty } from '../../types/Property.type';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export type Image = {
  URL: string;
  description: string;
};
interface PropertyCardProps {
  property: IProperty;
  images: Image[];
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="flex flex-col md:flex-row bg-sageLight rounded-lg p-2 md:p-4 text-darkest space-x-4 space-y-8">
      {/* container for images section */}
      <div className="md:w-1/2 flex">
        {/* carousel container */}
        <div className="w-full">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="w-full h-auto">
                <img src={image.URL} alt={image.description} className="w-full h-full object-cover" />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* container for details section */}
      <div className="flex flex-col space-between space-y-2 md:w-1/2 justify-center items-center">
        <h2>{property.street ?? 'Street'}</h2>
        <p>House</p>
        <p>Number of bedrooms: {property.numberOfBedrooms}</p>
        <div className="border-sageDark border-2 rounded p-2 md:p-3">
          <p>{property.description}</p>
        </div>
      </div>
    </div>
  );
};

// const PropertyCard = ({ title, description, images }: PropertyCardProps) => {
//   return (
//     // <Card className="text-center">
//     //   <Container>
//     //     <Row>
//     //       <Col md={6}>
//     //         <Carousel>
//     //           {images.map((image) => (
//     //             <Carousel.Item key={image.URL}>
//     //               <Image src={'https://picsum.photos/500/200'} rounded />
//     //               <Carousel.Caption>
//     //                 <p>{image.description}</p>
//     //               </Carousel.Caption>
//     //             </Carousel.Item>
//     //           ))}
//     //         </Carousel>
//     //       </Col>
//     //       <Col md={6}>
//     //         <Card.Body>
//     //           <Card.Title>{title}</Card.Title>
//     //           <Card.Text>{description}</Card.Text>
//     //         </Card.Body>
//     //       </Col>
//     //     </Row>
//     //   </Container>
//     // </Card>
//   );
// };

// export default PropertyCard;
