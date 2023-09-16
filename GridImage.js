import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import image from "../assests/image.jpg";
import image1 from '../assests/images.jpg'

function GridImage() {
  return (
    <Container id="alt">
        <h2 id="heading-about">About Us</h2>
      <Row>
        <Col className="para-container">
          <p >
            The SRM College was opened on March 1, 1855. A
            SRM Girls' School was opened the next year and moved into its
            present buildings in 1888.
          </p>

          <p >
            Meanwhile, two decades earlier the Madras Parental Academy was
            established in Georgetown. The school, which opened in 1834, took
            the name of Bishop Daniel Corrie, the first Anglican Bishop of
            Madras, after he was enthroned in 1835, and the school had been made
            a high school.
          </p>

          <p >
            The SRM High School and the SRM College
            amalgamated on January 1, 1928, and took the name SRM
            High School. It is under that name that the school with roots over
            150 years old still thrives.
          </p>

          <p >
            The SRM Group of Schools is one of the most popular and one of
            the oldest schools in Chennai; it has six schools in its management.
          </p>
        </Col>
        <Col >
          <img id="about-image" src={image} alt="school"></img>
        </Col>
      </Row>

      <Row>
      <Col >
          <img id="about-image1" src={image1} alt="school"></img>
        </Col>
        <Col className="para-container1">
          <p >
            The Doveton Protestant College was opened on March 1, 1855. A
            Doveton Girls' School was opened the next year and moved into its
            present buildings in 1888.
          </p>

          <p >
            Meanwhile, two decades earlier the Madras Parental Academy was
            established in Georgetown. The school, which opened in 1834, took
            the name of Bishop Daniel Corrie, the first Anglican Bishop of
            Madras, after he was enthroned in 1835, and the school had been made
            a high school.
          </p>

          <p >
            The Bishop Corrie High School and the Doveton Protestant College
            amalgamated on January 1, 1928, and took the name Doveton Corrie
            High School. It is under that name that the school with roots over
            150 years old still thrives.
          </p>

          <p >
            The Doveton Group of Schools is one of the most popular and one of
            the oldest schools in Chennai; it has six schools in its management.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default GridImage;
