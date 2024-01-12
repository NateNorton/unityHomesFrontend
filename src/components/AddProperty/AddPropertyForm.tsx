import { Container, Form } from 'react-bootstrap';

const AddPropertyForm = () => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="propertyTitle">
          <Form.Label>Property Title</Form.Label>
          <Form.Control type="test" />
          <Form.Text className="test-muted">A descriptive title for your property</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="propertyDescription">
          <Form.Label>Property Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
          <Form.Text className="test-muted">Describe your property in detail</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="propertyPostcode">
          <Form.Label>Post code</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="propertyAddress">
          <Form.Label>Street Address</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="propertyCity">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default AddPropertyForm;
