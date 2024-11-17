import { useState, React } from 'react'
import { Zoom, Fade } from 'react-awesome-reveal'
import dsc from '../media/ETL.png'
import scr from '../media/mstcgs.jpg'
import gotg from '../media/NetflixAnalyitcs.jpg'
import rfp from '../media/PowerBI.jpg'
import ca from '../media/network.jpg'
import tcd from '../media/riskassesment.jpg'
import Container from 'react-bootstrap/esm/Container'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/esm/Card'
import Modal from 'react-bootstrap/Modal'

const Experience = ({darkMode}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div data-theme={darkMode ? "dark" : "light"}>
            <br></br>
            <Fade>
            <Container>
                <br></br>
                <h2 className="lead" align="center"><b>- Experience -</b></h2>
                <br></br>
                <Zoom>
                <Row>
                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={tcd}/>
                                        <Card.Body>
                                            <Card.Title align="center">Smart Contract Vulnerability Analysis & Risk Profiling</Card.Title>
                                            <Card.Text>
                                                <p align="center">A data-driven project analyzing and categorizing smart contract vulnerabilities for improved risk assessment.</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Conduct detailed data labeling and validation of smart contract vulnerabilities to ensure data reliability.
                                        <br></br>Utilized unsupervised machine learning for cluster analysis, improving risk profiling effectiveness by 30%.                                        .
                                        <br></br>Leveraged SQL, Excel, and Tableau for data analysis, leading to a 20% faster turnaround in generating actionable insights.
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://github.com/sindhubommali01/Smart-Contract-Vulnerabilities" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={gotg}/>
                                        <Card.Body>
                                            <Card.Title align="center">Netflix Exploratory Data Analysis</Card.Title>
                                            <Card.Text>
                                                <p align="center">Interactive Tableau Dashboard to analyze Netflix's content library and viewership trends</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Leveraged visualizations to uncover insights into audience preferences and content distribution
                                        <br></br>Achieved a 20% improvement in data-driven content acquisition and recommendation strategies
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://public.tableau.com/app/profile/tanmay.bandaru/viz/Netflix_Real2/Dashboard1" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={ca}/>
                                        <Card.Body>
                                            <Card.Title align="center">Network Intrusion Detection</Card.Title>
                                            <Card.Text>
                                                <p align="center">A machine learning-based system for detecting network intrusions by analyzing network traffic data with Python.</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Built a real-time monitoring system to detect network intrusions using Python, Kafka, scikit-learn, and TensorFlow on the UNSW-NB15 dataset.
                                        <br></br>Enhanced firewall capabilities and reduced intrusion detection time by 40%, achieving 96% anomaly detection accuracy.
                                        <br></br>Strengthened model accuracy by 15% through advanced data preprocessing and visualization in Tableau.
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://github.com/sindhubommali01/Intrusion-Detection-System" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                </Row>
                </Zoom>
                <br></br>
                <Zoom>
                <Row>
                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={rfp}/>
                                        <Card.Body>
                                            <Card.Title align="center">HR Analytics</Card.Title>
                                            <Card.Text>
                                                <p align="center">An interactive Power BI dashboard, provides HR teams with actionable insights for strategic decision-making.</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Enabled strategic planning and trend identification through simplified data analysis
                                        <br></br>Enhanced firewall capabilities and reduced intrusion detection time by 40%, achieving 96% anomaly detection accuracy.
                                        </p>
                                    </div>  
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://drive.google.com/file/d/1RQXf4M3SxuKcP9z4KcFjydYcywooYmYb/view?pli=1" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Project</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={dsc}/>
                                        <Card.Body>
                                            <Card.Title align="center">End-to-End Data Workflow Automation</Card.Title>
                                            <Card.Text>
                                                <p align="center">Automated ETL pipeline to streamline data extraction, transformation, and loading for improved processing efficiency.</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p> Developed an ETL pipeline using Python, reduced manual data processing time by 40%..
                                        <br></br>Optimized data workflows, decreasing data processing time by 35% and enhancing overall productivity..
                                        <br></br>Loaded transformed data into a structured database, improving data retrieval and analysis speed by 30%.
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                        <a href="https://github.com/sindhubommali01/Beginner-ETL-Pipeline" target="_blank" rel="noreferrer noopener">
                            <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">View Github Repo</Button>
                        </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                    <Col lg={4} sm={12}>
                        <Card align="center" className="exp" data-theme={darkMode ? "dark" : "light"}>
                        <br></br>
                        <center>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Card.Img variant="top" src={scr}/>
                                        <Card.Body>
                                            <Card.Title align="center">Student Representative</Card.Title>
                                            <Card.Text>
                                                <p align="center">Representative of Department of Computer Science, Missouri S&T</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Managed and helped students in their curriculum and other difficulties.
                                        <br></br>Launched and organized weekly workshops on AI and Blockchain technologies to provide hands-on learning experiences for students.
                                        <br></br>Coordinated between faculties and students about studies and other activities.
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://www.instagram.com/sandtcgs?igsh=bHRhanQ1emY3cHJn" target="_blank" rel="noreferrer noopener">
                                <Button variant={darkMode ? "outline-light" : "outline-dark"} className="sbtn">Instagram Handle</Button>
                            </a>
                        </div>
                        <br></br>
                        </Card>
                    </Col>
                </Row>
                </Zoom>
            </Container>
            </Fade>
            <br></br>
            <hr></hr>
            <br></br>
        </div>
    )
}

export default Experience
