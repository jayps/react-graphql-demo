import React from "react";
import {Col, Row} from "reactstrap";

type LoaderProps = {
    loading: boolean;
    message?: string;
}

const Loader: React.FC<LoaderProps> = ({loading, message}: LoaderProps) => {
    if (!loading) {
        return null;
    }

    return (
        <React.Fragment>
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
        </React.Fragment>


    )
}

export default Loader;