import React from 'react';
import { Input } from 'antd';
import { PlusCircleTwoTone } from '@ant-design/icons';
import { IconCheck, IconX } from '../../icons';
import { AppButton } from '../../buttons';
import { Text } from '../../typo';

interface DropdownRenderCreateProps {
    options: React.ReactElement;
    onCreate?: (value?: string) => void;
    typeCreate?: 'input' | 'modal';
    createText?: string;
}

export const DropdownRenderCreate = (props: DropdownRenderCreateProps) => {
    const { options, onCreate, typeCreate } = props;
    const [showInputCreate, setShowInputCreate] = React.useState<boolean>(false);
    const [newItem, setNewItem] = React.useState('');
    const isShowButtonCreate = !!onCreate && !showInputCreate;

    const handleClickButtonAddNew = () => {
        if (typeCreate === 'modal') {
            onCreate?.();
            return;
        }
        setShowInputCreate(true);
    };

    return (
        <>
            {options}
            {showInputCreate && (
                <Input
                    name='newItem'
                    placeholder='New item'
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    suffix={
                        <>
                            <IconCheck onClick={() => {
                                onCreate?.(newItem);
                                setShowInputCreate(false);
                                setNewItem('');
                            }} />
                            <IconX onClick={() => setShowInputCreate(false)} />
                        </>
                    }
                />
            )}
            {isShowButtonCreate && (
                <AppButton
                    onClick={handleClickButtonAddNew}
                    textAlign='left'
                    width='100%'
                    type='text'
                    icon={<PlusCircleTwoTone />}
                >
                    <Text color='#0c6ff3'>{props.createText}</Text>
                </AppButton>
            )}
        </>
    );
};

