import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../css/Portfolio.css';

import { faExternalLinkAlt, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'

import { portfolioCards } from '../EditMe';

function Portfolio() {
    return (
        <Container className="portfolio-container">
            <Row >
                {portfolioCards.map((card) => 
                    <Col xs={12} md={6} lg={4} className="portfolio-card" >
                        <div className="card-info" >
                            <Row style={{display:'flex', justifyContent:'space-between'}}>
                                <Col xs={6} className="card-title">{card.projectTitle}</Col>
                                {card.projectsURL.map(url => 
                                <Col xs={2} className="card-external-url"><a href={url} className="url-icon"><FontAwesomeIcon icon = { faExternalLinkAlt } /></a></Col>                                
                                )}
                                {card.Link !== "" &&
                                <Col xs={2} className="card-external-url"><a href={card.Link} className="url-icon"><FontAwesomeIcon icon = { faArrowCircleRight } /></a></Col>
                                }
                            </Row>
                            <Row>
                                <Col 
                                className="card-desc"
                                >{card.projectDesc.line1}<br></br>{card.projectDesc.line2}<br></br>{card.projectDesc.line3}<br></br>{card.projectDesc.line4}
                                <br></br>{card.projectDesc.line5}<br></br>{card.projectDesc.line6}
                                </Col>
                            </Row>
                        </div>
                    </Col>
                )}
            </Row>
        </Container>
    );
}

export default Portfolio;