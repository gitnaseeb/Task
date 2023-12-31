import React from 'react'
import Card from 'react-bootstrap/Card';
import GalleryImage from '../assests/GalleryImage.jpg'
function Gallery() {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img className='Gallery-Image' variant="top" src={GalleryImage}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Gallery