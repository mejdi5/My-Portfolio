import React from 'react';
import clsx from 'clsx';

import { Row, Col } from 'react-bootstrap';

import '../css/Experience.css';
import { experience } from '../EditMe';

function Experience() {
    return (
        <Row className="experience-container">
            <Col xs={12} className="experience-section">
                {experience.experiences.map((company) => 
                    <Row className="company" >
                        <Col xs={12} md={9} className="companyDetails">
                        <p className="companyName">{company.companyName}</p>
                            {company.roles.map((role) =>
                                <>
                                    <p className="role"> {role.role}</p>
                                    <p className="role-time">{role.startPeriod} {role.endPeriod !== "" && '-'} {role.endPeriod} {/*• {role.type}*/}</p>
                                    {/*<p className="role-desc">{role.description}</p>*/}
                                </>
                            )}  
                            {/*<p className="companyLocation">{company.companyLocation}</p>*/}
                        </Col>
                        <Col xs={12} md={3}>
                            <img className="companyLogo" src={clsx({
                                'https://quarkerp.com.br/images/logo-placeholder.png' : company.companyLogo == "",
                                [company.companyLogo] : company.companyLogo != "",
                            })} />
                        </Col>
                    </Row>
                )}
            </Col>
        </Row>
    );
}

export default Experience;