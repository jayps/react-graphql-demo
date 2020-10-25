import React from "react";
import PageLayout from "./PageLayout";
import styled from "styled-components";

type ErrorBoundaryState = {
    error?: Error | null;
}

type ErrorBoundaryProps = {
    children: any;
}

const CenteredContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 50vh;
`;

const ErrorHeading = styled.h1`
    margin-bottom: 2em;
`;

// Class based component. I don't think there is a hook for catching errors in this way yet.
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);

        this.state = {
            error: null
        };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        this.setState({error})
    }

    render() {
        if (this.state.error) {
            return (
                <PageLayout>
                    <CenteredContent>
                        <ErrorHeading>Well, this is embarrassing!</ErrorHeading>
                        <p>
                            Something has gone wrong. We're very sorry about this. This error has been reported to us and we'll check it out
                            soon.
                            <hr />
                            For further enquiries, please contact us on <a href="tel:+27123456789">012 345 6789</a>.
                        </p>
                    </CenteredContent>
                </PageLayout>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;