import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Search = ({ searchQuery, setSearchQuery, onSearch }) => {
  return (
    <div className="center">
      <Form onSubmit={onSearch} className="search-form">
        <Form.Group className="mb-3" controlId="formSearch">
          <Form.Control
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default Search;
