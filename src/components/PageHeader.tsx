import styled from "styled-components";
import React from "react";

const StyledPageHeader = styled.div`
    padding: 32px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

type PageHeaderProps = {
    children: any;
}

const PageHeader: React.FC<PageHeaderProps> = ({children}: PageHeaderProps) => {
    return (
        <StyledPageHeader>
            {children}
        </StyledPageHeader>
    )
}

export default PageHeader;