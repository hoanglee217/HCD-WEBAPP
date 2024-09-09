import React from 'react';

import { FlexBox } from './FlexBox';

export const EmptyLayout = (props: React.PropsWithChildren) => {
    return (
        <FlexBox height='100vh' preset='column-center'>
            {props.children}
        </FlexBox>
    );
};