import { Button, Card, Form } from 'react-bootstrap';
interface ISearchBoxProps {
  setSearchTerm: (_term: string) => void;
  handleSubmit?: () => void;
}

const SearchBox = ({ setSearchTerm, handleSubmit }: ISearchBoxProps) => {
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
            <Button variant="primary" onClick={handleSubmit}>
              submit
            </Button>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default SearchBox;
