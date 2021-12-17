import React from 'react';

import { Row, Nav, Col, Tab} from 'react-bootstrap';
import TabUser from '../../components/admin/tabs/User';



function Admin() {
    return (


        <div className="">
            <h1>BIENVENUE SUR L'ADMIN SPACE </h1>
            <hr className="my-5" />
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">User</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Section</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Informations importantes</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Actualités</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className="container">
                            <Tab.Pane eventKey="first">
                            <TabUser></TabUser>

                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <h1>section</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <h1>Infos </h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <h1>Actualiés</h1>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>



            <hr className="my-5" />
            <div className="row">
                <div className="col-4">

                </div>
                <div className="col-4">

                </div>
                <div className="col-4">

                </div>
            </div>
        </div>


    )
}
export default Admin;