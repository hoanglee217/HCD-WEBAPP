import React from 'react';

import { IconTrash } from '../../icons';
import { Block, FlexBox } from '../../layouts';

export const HeaderModalDelete = () => {
    return (
        <Block className='header-modal-delete'  >
            <Block
                width={48}
                height={48}
                backgroundColor='#FEE4E2'
                borderRadius={999}
            >
                <FlexBox justifyContent='center' alignItems='center' height='100%' width='100%'>
                    <IconTrash color='red' />
                </FlexBox>
            </Block>
        </Block>
    );
};
