import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ClassmateCard from './ClassmateCard';

// Store all data in a single array named "People"
const People = [
  {
    name: "Daniel",
    favoriteColor: "Blue",
    favoriteFood: "Pizza"
  },
  {
    name: "Mehak",
    favoriteColor: "Green",
    favoriteFood: "Sushi"
  },
  {
    name: "Preethi",
    favoriteColor: "Red",
    favoriteFood: "Burger"
  }
];

function ClassmatesList() {
  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">My Classmates</h2>
      <Row>
        <Col md={8} className="mx-auto">
          {People.map((classmate, index) => (
            <ClassmateCard
              key={index}
              {...classmate}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default ClassmatesList; 