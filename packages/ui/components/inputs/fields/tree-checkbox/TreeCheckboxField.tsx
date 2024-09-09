import './TreeCheckboxField.scss';
import { Spacer, Text, translateCodes } from '@hcd/ui';
import { FormConnector } from '@hcd/ui/components/inputs/FormConnector';
import { Tree, Input, Card } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import type { TreeDataNode,  } from 'antd';
import React, { useCallback } from 'react';
import { CheckInfo } from 'rc-tree/lib/Tree';
import { Controller, UseControllerProps, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
const { TreeNode } = Tree;
interface FormValues {
    readonly name: string;
    readonly label?: string;
    readonly searchLabel?: string;
    readonly rules?: UseControllerProps['rules'];
    readonly treeData?: TreeDataNode[];
    readonly onChange?: (value: string[]) => void;
    readonly onSearch?: (value: string) => void;
    readonly checkable?: boolean;
    readonly isLoading?: boolean;
}

export const TreeCheckboxField = (props: React.PropsWithChildren<FormValues>) => {
    const {checkable = true} = props;
    const { t } = useTranslation();
    const { setValue } = useFormContext();
    const { name, rules, onSearch, treeData = [] } = props;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onRender = useCallback((renderProps: any) => {
        const {  value } = renderProps.field;

        const onCheck = (_:unknown, info:CheckInfo<TreeDataNode>) => {
            const values = info.checkedNodes.filter((e) => e.isLeaf == true).map((e) => e.key);
            setValue(name, values, {
                shouldDirty: true,
            });
            props.onChange?.(values as string[]);
        };

        if(treeData.length === 0) {
            return <Text>{t(translateCodes.TREE_EMPTY_DATA)}</Text>;
        }

        return (
            <Tree
                className='tree-field'
                checkable={checkable}
                showIcon={false}
                defaultExpandAll={true}
                checkedKeys={value}
                onCheck={onCheck}
                blockNode
            >
                {props.treeData?.map((tree) => (
                    <TreeNode className='tree-parent' isLeaf={false} title={tree.title} key={tree.key} >
                        {tree.children?.map((treeChild) => 
                            (<TreeNode 
                                key={treeChild.key}
                                className='tree-leaf' 
                                isLeaf={true} 
                                title={treeChild.title} 
                            />)
                        )}
                    </TreeNode>
                ))}
            </Tree>);

    }, [checkable, name, props, setValue, t, treeData.length]);

    return (
        <FormConnector>
            {(form) => {
                const { control } = form;
                return (
                    <>
                        {props.label && (
                            <Spacer bottom={6}>
                                <Text
                                    fontWeight={600}
                                    fontSize={18}
                                    lineHeight='20px'
                                    color='#344054'
                                >
                                    {t(props.label)}
                                </Text>
                            </Spacer>
                        )}
                        <Card loading={props.isLoading}>
                            {onSearch && (
                                <Spacer bottom={24}>
                                    <Input
                                        size='large'
                                        placeholder={props.searchLabel}
                                        prefix={<SearchOutlined />}
                                        onChange={(value) => onSearch?.(value.target.value)}
                                    />
                                </Spacer>
                            )}
                            <Controller
                                name={name}
                                control={control}
                                render={onRender}
                                rules={rules}
                            />
                        </Card>
                    </>
                );
            }}
        </FormConnector>
    );
};