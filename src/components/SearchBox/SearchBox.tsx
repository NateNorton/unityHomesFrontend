import { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { fetchProperties } from '../../api/property.service';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const submitSearch = async () => {
    const properties = await fetchProperties(searchTerm);
    console.log(properties);
    searchTerm && setSearchTerm('');
  };

  const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Find your perfect Homes</Card.Title>
        <Form>
          <Form.Group>
            <Form.Label>Search for properties</Form.Label>
            <Form.Control type="text" placeholder="Enter postcode or place" onChange={handleSearchTermChange} />
            <Button variant="Primary" onClick={submitSearch}>
              submit
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SearchBox;
