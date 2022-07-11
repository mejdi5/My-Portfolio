import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../css/Application.css';

import { faExternalLinkAlt, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'

import { applications } from '../EditMe';

function Applications() {
    return (
    <div className="application-container">
        <Container >
            <Row >
                {applications.map((card) => 
                    <Col xs={12} md={6} lg={4} className="application-card" >
                        <div className="application-card-info" >
                            <Row style={{display:'flex', justifyContent:'space-between'}}>
                                <Col xs={6} className="application-card-title">{card.projectTitle}</Col>
                                {card.projectsURL.map(url => 
                                <Col xs={2} className="application-card-external-url"><a href={url} className="url-icon"><FontAwesomeIcon icon = { faExternalLinkAlt } /></a></Col>                                
                                )}
                                {card.Link !== "" &&
                                <Col xs={2} className="application-card-external-url"><a href={card.Link} className="url-icon"><FontAwesomeIcon icon = { faArrowCircleRight } /></a></Col>
                                }
                            </Row>
                            <Row>
                                <Col 
                                className="application-card-desc"
                                >{card.projectDesc.line1}<br></br>{card.projectDesc.line2}<br></br>{card.projectDesc.line3}<br></br>{card.projectDesc.line4}
                                <br></br>{card.projectDesc.line5}<br></br>{card.projectDesc.line6}
                                </Col>
                            </Row>
                        </div>
                    </Col>
                )}
            </Row>
        </Container>
    </div>
    );
}

export default Applications;