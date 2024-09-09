import './WorkingTime.scss';

import React from 'react';
import { Control, UseFormWatch } from 'react-hook-form';
import { dayjs, Dayjs } from '@hcd/shared';
import { DayInWeek } from '../../constants';
import { FieldArray } from '../inputs';
import { Text } from '../typo';
import { Block } from '../layouts';
import { WorkingTimeFrames } from './children';

export interface IWorkingTimeFrame {
    isActive: boolean;
    workingTime: {
        startTime?: string;
        endTime?: string;
    };
    breakTimes: {
        startTime?: string;
        endTime?: string;
    }[];
}

export interface IWorkingTimeItem {
    readonly isDayOff: boolean;
    readonly startTime: string | Dayjs;
    readonly endTime: string | Dayjs;
    readonly dayOfWeek: number;
    readonly dayOfWeekTitle: string;
    readonly breakTimes?: IBreakTimes[]
}

export interface IBreakTimes {
    readonly startTime: Dayjs;
    readonly endTime: Dayjs;
    readonly dayOfWeek: number;
    readonly dayOfWeekTitle: string;
    readonly isFixed?: boolean;
}

export type IWorkingTime = IWorkingTimeItem[];

export interface IDayType {
    name: string;
    key: DayInWeek;
}

const defaultOrganizationEndTime = dayjs().startOf('day').hour(22).toISOString();
const defaultOrganizationStartTime = dayjs().startOf('day').hour(8).toISOString();

export const defaultShifts: IWorkingTime = [
    {
        isDayOff: false,
        startTime: defaultOrganizationStartTime,
        endTime: defaultOrganizationEndTime,
        dayOfWeek: DayInWeek.Monday,
        dayOfWeekTitle: 'Monday',
        breakTimes: []
    },
    {
        isDayOff: false,
        startTime: defaultOrganizationStartTime,
        endTime: defaultOrganizationEndTime,
        dayOfWeek: DayInWeek.Tuesday,
        dayOfWeekTitle: 'Tuesday',
        breakTimes: []
    },
    {
        isDayOff: false,
        startTime: defaultOrganizationStartTime,
        endTime: defaultOrganizationEndTime,
        dayOfWeek: DayInWeek.Wednesday,
        dayOfWeekTitle: 'Wednesday',
        breakTimes: []
    },
    {
        isDayOff: false,
        startTime: defaultOrganizationStartTime,
        endTime: defaultOrganizationEndTime,
        dayOfWeek: DayInWeek.Thursday,
        dayOfWeekTitle: 'Thursday',
        breakTimes: []
    },
    {
        isDayOff: false,
        startTime: defaultOrganizationStartTime,
        endTime: defaultOrganizationEndTime,
        dayOfWeek: DayInWeek.Friday,
        dayOfWeekTitle: 'Friday',
        breakTimes: []
    },
    {
        isDayOff: false,
        startTime: defaultOrganizationStartTime,
        endTime: defaultOrganizationEndTime,
        dayOfWeek: DayInWeek.Saturday,
        dayOfWeekTitle: 'Saturday',
        breakTimes: []
    },
    {
        isDayOff: false,
        startTime: defaultOrganizationStartTime,
        endTime: defaultOrganizationEndTime,
        dayOfWeek: DayInWeek.Sunday,
        dayOfWeekTitle: 'Sunday',
        breakTimes: []
    }
];

interface WorkingTimeProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    watch: UseFormWatch<any>;
    name: string;
    useAddBreakTime?: boolean;

}

export const WorkingTime = (props: WorkingTimeProps) => {
    const { control, name, watch, useAddBreakTime = true } = props;

    return (
        <Block className='working-time'>
            <Block className={`table-header ${useAddBreakTime ? '': 'no-break'}`} display='grid'>
                <Text fontWeight='bold' textAlign='left'>Day</Text>
                <Text fontWeight='bold' textAlign='left'>Start Time</Text>
                <Text fontWeight='bold' textAlign='left'>Finish Time</Text>
                <Text fontWeight='bold' textAlign='left'>Duration</Text>
            </Block>
            <Block>
                <FieldArray<IWorkingTimeItem>
                    name={name}
                    isUseWrapper={false}
                >
                    {({ fields }) => {

                        return (
                            <>
                                {fields?.map((workingTime, index) => (
                                    <Block className='table-body' key={workingTime.dayOfWeek}>
                                        <WorkingTimeFrames
                                            name={`${name}.${index}`}
                                            watch={watch}
                                            control={control}
                                            workingTime={workingTime}
                                            useAddBreakTime={useAddBreakTime}
                                        />
                                    </Block>
                                ))}
                            </>
                        );
                    }}
                </FieldArray>
            </Block>
        </Block>
    );
};
