import React from 'react';

import { Container, Col, 
    Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../css/Profile.css';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";


// Value Import
import { information, socials } from '../EditMe';


function Profile() {
    return (
        <Container fluid className="profile-row">
            <Row>
                <Col className="column-greeting" xs={12} lg={4}>
                    <p className="greeting-sub">{information.welcomeMsg}</p>
                    <p className="greeting-name">{information.fullName}</p>
                </Col>
                <Col className="column-profile" xs={12} lg={4}>
                    <div className="profile">
                        <img className="profile-img" src={information.profilePhoto} alt={information.fullName + "'s profile"}></img>
                    </div>
                    <div className="profile-socials">
                        <a target="_blank" rel="noreferrer" href={socials.githubURL} className="profile-github">
                            <FontAwesomeIcon icon = { faGithub } />
                        </a>
                        <a target="_blank" rel="noreferrer" href={socials.linkedinURL} className="profile-linkedin">
                            <FontAwesomeIcon icon = { faLinkedin } />
                        </a>
                    </div>
                </Col>
                <Col className="column-status" xs={12} lg={4}>
                    <p className="lower-profile-text">{information.aboutMe}</p>
                </Col>
            </Row>
            <Row>
                <Col className="contact" xs={12} lg={7} >
                    <p><FontAwesomeIcon icon = { faPhone }/> 95614525 / 23637776 </p>
                    <p><FontAwesomeIcon icon = { faEnvelope }/> mejdi.ben.ammou@gmail.com</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;