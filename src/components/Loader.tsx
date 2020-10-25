import React from "react";
import {Col, Row} from "reactstrap";
import styled from "styled-components";

type LoaderProps = {
    loading: boolean;
    children: any;
    message?: string;
}

const LoaderContainer = styled.div`
    text-align: center;
`;

const Loader: React.FC<LoaderProps> = ({loading, children, message}: LoaderProps) => {
    if (!loading) {
        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        );
    }

    return (
        <LoaderContainer>
            <Row>
                <Col>
                    <div className="lds-roller">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    {message || 'Loading...'}
                </Col>
            </Row>
        </LoaderContainer>


    )
}

export default Loader;