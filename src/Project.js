import React from 'react';
import './Projects.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import p1 from './Assets/pq.png'
import p2 from './Assets/p2.png'
import p3 from './Assets/ad.jpg'

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-content container">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-text">Here are some of my recent projects:</p>
        <div className="row">
          <div className="col-md-4">
            <Card className='car'>
              <Card.Img variant="top" src={p1} />
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary" className='bb'>Github Link</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className='car'>
              <Card.Img variant="top" src={p2} />
              <Card.Body>
                <Card.Title>project 2</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary" className='bb'>Github Link</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className='car'>
              <Card.Img className='ad' variant="top" src={p3} />
              <Card.Body>
                <Card.Title>Project 3</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary" className='bb'>Github Link</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
