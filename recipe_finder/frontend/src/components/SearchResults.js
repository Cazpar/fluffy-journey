import React from 'react';
import Card from 'react-bootstrap/Card';

const Results = ({ results }) => {
  return (
    <div className="search-results">
      {results.map((result, index) => (
        <Card key={index} className="result-card">
          <Card.Body>
            <Card.Title>{result.title}</Card.Title>
            <Card.Text>{result.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Results;
