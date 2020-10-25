import React from 'react';
import {Col, Container, Row, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav, NavbarText} from "reactstrap";
import {NavLink} from 'react-router-dom';
import {AuthorsContext} from "../contexts/authors/AuthorsContext";

export type PageLayoutProps = {
    children: any;
}

const PageLayout: React.FC<PageLayoutProps> = ({children}: PageLayoutProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const {error} = React.useContext(AuthorsContext);

    if (error) {
        throw new Error('Something has gone wrong.')
    }

    const toggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Book store demo</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink to="/authors/">Authors</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Container>
                {children}
            </Container>
        </React.Fragment>
    )
}

export default PageLayout;