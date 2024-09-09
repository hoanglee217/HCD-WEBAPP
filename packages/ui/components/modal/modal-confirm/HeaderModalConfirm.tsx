import React from 'react';

import { IconRefresh } from '../../icons';
import { Block, FlexBox } from '../../layouts';

export const HeaderModalConfirm = () => {
    return (
        <Block className='header-modal-delete'  >
            <Block
                width={48}
                height={48}
                backgroundColor='#DCFAE6'
                borderRadius={999}
            >
                <FlexBox justifyContent='center' alignItems='center' height='100%' width='100%'>
                    <IconRefresh color='green' />
                </FlexBox>
            </Block>
        </Block>
    );
};
