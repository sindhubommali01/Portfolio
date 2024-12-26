import { useState, React } from 'react'
import { Zoom, Fade } from 'react-awesome-reveal'
import dsc from '../media/pipeline.png'
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
//import Modal from 'react-bootstrap/Modal'

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
                                        <Card.Img variant="top" src={dsc}/>
                                        <Card.Body>
                                            <Card.Title align="center">YouTube Data Piepline</Card.Title>
                                            <Card.Text>
                                                <p align="center">A scalable ETL Pipeline for processing YouTube data, enabling real-time insights through optimized data formats and interactive dashboards</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Designed an ETL pipeline with AWS Glue and Lambda, reducing manual effort by 70% and enabling real-time data readiness.
                                        <br></br>Transformed JSON and CSV data into Parquet, improving query performance with AWS Athena.
                                        <br></br>Created an AWS QuickSight dashboard for regional YouTube performance, boosting decision-making efficiency by 60%.
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://github.com/sindhubommali01/Youtube_Data_Pipeline_AWS" target="_blank" rel="noreferrer noopener">
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
                                        <Card.Img variant="top" src={ca}/>
                                        <Card.Body>
                                            <Card.Title align="center">Network Intrusion Detection</Card.Title>
                                            <Card.Text>
                                                <p align="center">A machine learning-based system for detecting network intrusions by analyzing network traffic data with Python</p>
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
                                        <Card.Img variant="top" src={gotg}/>
                                        <Card.Body>
                                            <Card.Title align="center">Netflix Exploratory Data Analysis</Card.Title>
                                            <Card.Text>
                                                <p align="center">Interactive Tableau Dashboard to analyze Netflix's content library and viewership trends</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Created a Tableau dashboard analyzing 5K+ titles, highlighting India's 92% movie dominance and a 74% content increase post-2015.
                                        <br></br>Designed filters for type, ratings, and year, enabling user exploration of top genres, monthly additions, and audience-specific insights.
                                        </p>
                                    </div> 
                                </div>
                            </div>
                        </center>
                        <br></br>
                        <div>
                            <a href="https://public.tableau.com/app/profile/tanmay.bandaru/viz/Netflix_Real2/Dashboard1" target="_blank" rel="noreferrer noopener">
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
                                                <p align="center">An interactive Power BI dashboard, provides HR teams with actionable insights for strategic decision-making</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Developed a Power BI dashboard to analyze 1,470 employees, showcasing 92% active employees and identifying 72 employees eligible for promotion.
                                        <br></br> Included gender distribution (60% male, 40% female), job levels, and proximity insights for actionable workforce planning.
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
                                        <Card.Img variant="top" src={tcd}/>
                                        <Card.Body>
                                            <Card.Title align="center">Smart Contract Vulnerability Analysis & Risk Profiling</Card.Title>
                                            <Card.Text>
                                                <p align="center">A data-driven project analyzing and categorizing smart contract vulnerabilities for improved risk assessment</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                    <div className="flip-card-back">
                                        <p>Conduct detailed data labeling and validation of smart contract vulnerabilities to ensure data reliability.
                                        <br></br>Utilized unsupervised machine learning for cluster Exploratory data analysis, improving risk profiling effectiveness by 30%.
                                        <br></br>Leveraged SQL, Excel, and Tableau for data analysis and Visualization, leading to a 20% faster turnaround in generating actionable insights.
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
