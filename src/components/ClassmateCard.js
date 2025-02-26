import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function ClassmateCard({ name, favoriteColor, favoriteFood }) {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <Card className="classmate-card mb-3">
      <Card.Body>
        <div>Name: {name}</div>
        <div>Favorite: {favoriteColor}</div>
        <div>Favorite Food: {favoriteFood}</div>
        <Button 
          variant="secondary" 
          size="sm" 
          onClick={handleLike}
          className="mt-2"
        >
          Like ({likes})
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ClassmateCard; 