import { EmptyLayout, ExternalLink } from '@hcd/ui';
import { Result } from 'antd';
import React from 'react';

export const NotFound = () => {
    return (
        <EmptyLayout>
            <Result
                status='404'
                title='Not Found'
                subTitle='Sorry, the page you visited does not exist.'
                extra={<ExternalLink href='/' translateCode='TO_HOME_PAGE' />}
            />
        </EmptyLayout>
    );
};