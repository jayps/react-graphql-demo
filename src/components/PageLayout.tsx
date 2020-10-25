import React from 'react';
import {Col, Container, Row, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav, NavbarText} from "reactstrap";
import { NavLink } from 'react-router-dom';

export type PageLayoutProps = {
    children: any;
}

const PageLayout: React.FC<PageLayoutProps> = ({children}: PageLayoutProps) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
            <Row>
                <Col>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">Book store demo</NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink to="/authors/">Authors</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Col>
            </Row>
            <Container>
                {children}
            </Container>
        </React.Fragment>
    )
}

export default PageLayout;