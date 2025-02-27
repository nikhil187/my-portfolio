import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

// ClassmateCard component to display each classmate's info
function ClassmateCard({ name, favoriteColor, favoriteFood }) {
  const [likes, setLikes] = useState(0); // State to track likes

  // Function to handle like button click
  const handleLike = () => {
    setLikes(likes + 1); // Increase likes by 1
  };

  return (
    <Card className="classmate-card mb-3"> {/* Card for each classmate */}
      <Card.Body>
        <div>Name: {name}</div> {/* Display classmate's name */}
        <div>Favorite: {favoriteColor}</div> 
        <div>Favorite Food: {favoriteFood}</div> 
        <Button 
          variant="secondary" 
          size="sm" 
          onClick={handleLike} 
          className="mt-2" 
        >
          Like ({likes}) {/* Show number of likes */}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ClassmateCard; // Export the component for use in other files