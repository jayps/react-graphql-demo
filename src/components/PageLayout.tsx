import React from 'react';

export type PageLayoutProps = {
    children: any;
}

const PageLayout: React.FC<PageLayoutProps> = ({children}: PageLayoutProps) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default PageLayout;