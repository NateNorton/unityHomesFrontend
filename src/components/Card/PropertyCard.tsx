import { Card, Carousel, Col, Container, Image, Row } from 'react-bootstrap';

type Image = {
  URL: string;
  description: string;
};
interface PropertyCardProps {
  title: string;
  description: string;
  images: Image[];
}

const PropertyCard = ({ title, description, images }: PropertyCardProps) => {
  return (
    <Card className="text-center">
      <Container>
        <Row noGutters>
          <Col md={6}>
            <Carousel>
              {images.map((image) => (
                <Carousel.Item key={image.URL}>
                  <Image src={image.URL} rounded />
                  <Carousel.Caption>
                    <p>{image.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default PropertyCard;
