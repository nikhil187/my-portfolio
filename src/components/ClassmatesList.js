import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ClassmateCard from './ClassmateCard';

// Store all data in a single array named "People".
// This array holds the details of each classmate, making it easy to manage and update.
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
          {/* 
            Loop through the People array and create a ClassmateCard for each classmate.
            The key prop helps React identify which items have changed are added or are removed.The (...) indicates as new data is added it gets updated.
          */}
        </Col>
      </Row>
    </Container>
  );
}

export default ClassmatesList; 