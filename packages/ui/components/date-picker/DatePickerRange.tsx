import React from 'react';
import { DatePicker } from 'antd';
import type { TimeRangePickerProps } from 'antd';
import { dayjs, Dayjs } from '@hcd/shared';
import { useRecoilState } from 'recoil';
import { Block, FlexBox, Spacer } from '../layouts';
import './DatePickerRange.scss';
import { currentLocaleState } from '../../state/currentLocale';

const { RangePicker } = DatePicker;

interface DatePickerRangeProps {
    onChange: (dates: [Dayjs, Dayjs]) => void;
    defaultValue?: [Dayjs, Dayjs];
}

export const DatePickerRange = (props: DatePickerRangeProps) => {
    const { onChange, defaultValue } = props;
    const [currentLocale] = useRecoilState(currentLocaleState);
    
    const [value , setValue] = React.useState<[Dayjs, Dayjs]>(defaultValue ?? [dayjs(), dayjs()]);

    const renderExtraFooter = () => {
        return <ExtraFooter values={value} />;
    };

    const rangePresets: TimeRangePickerProps['presets'] = [
        { label: 'Today', value: [dayjs(), dayjs()]},
        { label: 'Yesterday', value: [dayjs().add(-1, 'd'), dayjs().add(-1, 'd')]},
        { label: 'This Week', value: [dayjs().startOf('week'), dayjs().endOf('week')]},
        { label: 'Last Week', value: [dayjs().add(-1, 'w').startOf('week'), dayjs().add(-1, 'w').endOf('week')]},
        { label: 'This Month', value: [dayjs().startOf('month'), dayjs().endOf('month')]},
        { label: 'Last Month', value: [dayjs().add(-1, 'M').startOf('month'), dayjs().add(-1, 'M').endOf('month')]},
        { label: 'This Year', value: [dayjs().startOf('year'), dayjs().endOf('year')]},
        { label: 'Last Year', value: [dayjs().add(-1, 'y').startOf('year'), dayjs().add(-1, 'y').endOf('year')]},
    ];

    return (
        <Block >
            <RangePicker 
                presets={rangePresets}
                placement='bottomRight'
                width='auto'
                value={value}
                separator='-'
                onChange={(dates) => {
                    setValue(dates as [Dayjs, Dayjs]);
                    onChange(dates as [Dayjs, Dayjs]);
                }}
                renderExtraFooter={() => renderExtraFooter()}
                format={currentLocale?.format}
            />
        </Block>
    );
};

interface ExtraFooterProps {
    readonly values: [Dayjs, Dayjs];
}

const ExtraFooter = (props:ExtraFooterProps ) => {
    const { values  } = props;
    values
    return (
        <Spacer left_right={8} top_bottom={12}>
            <FlexBox justifyContent='space-between' alignItems='center'>
                <FlexBox gap={8}>
                    <Block border='1px solid #d9d9d9' borderRadius={8}>
                        <Spacer left_right={12}>
                        </Spacer>
                    </Block>
            -
                    <Block border='1px solid #d9d9d9' borderRadius={8}>
                        <Spacer left_right={12}>
                        </Spacer>
                    </Block>
                </FlexBox>
            </FlexBox>
        </Spacer>
    );
};
