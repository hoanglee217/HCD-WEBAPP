import { ClockCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import React, { useRef } from 'react';
import { dayjs } from '@hcd/shared';
import {
    UseFieldArrayReturn,
    Control,
    Controller,
    UseFormWatch,
    FieldArrayWithId
    , FieldValues
} from 'react-hook-form';

import { IWorkingTimeFrame, IWorkingTimeItem } from '../WorkingTime';
import { Text } from '../../typo';
import { FieldArray, TimePickerField } from '../../inputs';
import { IconTrash } from '../../icons';
import { AppButton } from '../../buttons';
import {
    Block,
    FlexBox,
} from '../../layouts';
import { translateCodes } from '../../../locales';

interface WorkingTimeFramesProps {
    control: Control;
    workingTime: FieldArrayWithId<IWorkingTimeItem, 'breakTimes', 'id'>;
    name: string;
    watch: UseFormWatch<FieldValues>;
    useAddBreakTime?: boolean;
}

export const WorkingTimeFrames = (props: WorkingTimeFramesProps) => {
    const { control, workingTime, name, watch, useAddBreakTime = true } = props;
    const breakTimeFieldRef = useRef<UseFieldArrayReturn>();

    const isOff = watch(`${name}.isDayOff`);
    const employeeId = watch('id');

    const startHour = dayjs(watch(`${name}.startTime`)).hour() ;
    const endHour = dayjs(watch(`${name}.endTime`)).hour();
    const duration = Math.round(endHour - startHour);

    return (
        <>
            <Block className={`table-row ${useAddBreakTime ? '': 'no-break'}`} display='grid'>
                <FlexBox gap={12}>
                    <Controller
                        control={control}
                        name={`${name}.isDayOff`}
                        render={({ field }) => <Switch {...field} checked={!field.value} onChange={(e) => field.onChange(!e)} />}
                    />
                    <Text fontWeight='bold'>{workingTime.dayOfWeekTitle}</Text>
                </FlexBox>
                <TimePickerField
                    name={`${name}.startTime`}
                    format='h:mm A'
                    disabled={isOff}
                />
                <TimePickerField
                    disabled={isOff}
                    name={`${name}.endTime`}
                    format='h:mm A'
                />
                <FlexBox gap={4}>
                    <ClockCircleOutlined />
                    <Text>{duration}h</Text>
                </FlexBox>
                {useAddBreakTime && (
                    <AppButton
                        disabled={isOff}
                        icon={<PlusCircleOutlined />}
                        className='add-break'
                        onClick={() =>
                            breakTimeFieldRef.current?.append({
                                startTime: dayjs().startOf('day').add(10, 'hours').toISOString(),
                                endTime: dayjs().startOf('day').add(11, 'hours').toISOString(),
                                dayOfWeek: workingTime.dayOfWeek,
                                dayOfWeekTitle: workingTime.dayOfWeekTitle,
                                isFixed: true,
                                shiftId: workingTime.id,
                                employeeId: employeeId
                            } as IWorkingTimeFrame['workingTime'])
                        }
                    >
                    Add Break
                    </AppButton>
                )}
            </Block>
            <Block>
                <FieldArray
                    name={`${name}.breakTimes`}
                    isUseWrapper={false}
                >
                    {(fieldArray) => {
                        const { fields, remove } = fieldArray;
                        breakTimeFieldRef.current = fieldArray;

                        return (
                            <FlexBox direction='column' gap={16}>
                                {fields?.map((field, index) => {
                                    const breakTimeStartHour = dayjs(watch(`${name}.breakTimes.${index}.startTime`)).hour() ;
                                    const breakTimeEndHour = dayjs(watch(`${name}.breakTimes.${index}.endTime`)).hour();
                                    const breakTimeDuration = Math.round(breakTimeEndHour - breakTimeStartHour);
                                    return (
                                        <Block key={field.id} className='table-row' display='grid'>
                                            <Text textAlign='center' translateCode={translateCodes.BREAK} />
                                            <TimePickerField name={`${name}.breakTimes.${index}.startTime`} format='h:mm A' />
                                            <TimePickerField name={`${name}.breakTimes.${index}.endTime`} format='h:mm A' />
                                            <FlexBox gap={4}>
                                                <ClockCircleOutlined />
                                                <Text>{breakTimeDuration}h</Text>
                                            </FlexBox>
                                            <IconTrash
                                                onClick={() => {
                                                    remove(index);
                                                }}
                                                className='cursor-pointer'
                                            />
                                        </Block>
                                    );
                                })}
                            </FlexBox>
                        );
                    }}
                </FieldArray>
            </Block>
        </>
    );
};

