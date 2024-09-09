import React from 'react';

import { IconCheck } from '../../icons';
import { Block, FlexBox } from '../../layouts';

export const HeaderModalFinish = () => {
    return (
        <Block className='header-modal-finish'>
            <Block
                width={48}
                height={48}
                backgroundColor='#DCFAE6'
                borderRadius={12}
            >
                <FlexBox justifyContent='center' alignItems='center' height='100%' width='100%'>
                    <Block>
                        <IconCheck color='white'/>
                    </Block>
                </FlexBox>
            </Block>
        </Block>
    );
};
