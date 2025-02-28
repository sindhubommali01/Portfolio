import React from 'react';
import { Slide } from "react-awesome-reveal";
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';
import { FaPython, FaDatabase } from 'react-icons/fa';
import { SiMicrosoftexcel, SiTableau, SiPowerbi, SiAmazonaws } from 'react-icons/si';

const Skills = ({ darkMode }) => {
    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Slide>
                <Container>
                    <Row>
                        <Col lg={4} xs={8}>
                            <h1 className="display-3 skill-h">I can work <p className="with">with</p> </h1>
                        </Col>
                        <Col lg={2} xs={4}>
                            <br></br>
                            <Card className="nbcard">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                                    <FaPython className="skill" size='2x' />
                                </Button>
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                                    <FaDatabase className="skill" size='2x' /> {/* for SQL */}
                                </Button>
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                                    <SiMicrosoftexcel className="skill" size='2x' />
                                </Button>
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                                    <SiTableau className="skill" size='2x' />
                                </Button>
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                                    <SiPowerbi className="skill" size='2x' />
                                </Button>
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="skills-btn">
                                    <SiAmazonaws className="skill" size='2x' />
                                </Button>
                            </Card>
                        </Col>
                        <Col lg={6} xs={12}>
                            <br></br>
                            <Card className="skill-nbcard">
                        <Card.Body>
                            <Card.Title>Programming Languages</Card.Title>
                            <Card.Text>SQL, Python, R</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="skill-nbcard">
                        <Card.Body >
                            <Card.Title>Tools</Card.Title>
                            <Card.Text>Advanced Excel, Tableau, Power BI</Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="skill-nbcard">
                        <Card.Body >
                            <Card.Title>Databases & Cloud</Card.Title>
                            <Card.Text>MySQL, SQL Server, AWS, Azure </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="skill-nbcard">
                        <Card.Body >
                            <Card.Title>Others</Card.Title>
                            <Card.Text>MS office</Card.Text>
                        </Card.Body>
                    </Card>
                        </Col>
                    </Row>
                    <br></br>
                    <hr></hr>
                </Container>
            </Slide>
        </div>
    );
};

export default Skills;
