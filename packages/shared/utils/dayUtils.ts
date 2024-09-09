import { dayjs, Dayjs } from './timezoneUtils';

export const DEFAULT_FORMAT_TIME = 'YYYY-MM-DDTHH:mm:ss';

export const convertSameDate = (date: string | Dayjs, dateNeedConvert: string | Dayjs) => {
    date = typeof date === 'string' ? dayjs(date) : date;
    dateNeedConvert =
		typeof dateNeedConvert === 'string' ? dayjs(dateNeedConvert) : dateNeedConvert;

    const result = dayjs(dateNeedConvert)
        .set('date', date.date())
        .set('month', date.month())
        .set('year', date.year())
        .set('seconds', 0)
        .set('milliseconds', 0);

    return result;
};

export const getTimeByMinuteStep = (minuteStep: number, date?: string) => {
    let result = minuteStep;
    const currentMinute = dayjs().minute();
    const currentHour = dayjs().hour();
    const value = currentMinute / minuteStep;
    const floorValue = Math.floor(value);
    if (value > floorValue) {
        result = minuteStep * (floorValue + 1);
    }

    return dayjs(date).startOf('minute').hour(currentHour).minute(result).toISOString();
};

export const checkOverlap = <T>(
    data: (T & { startTime: string; endTime: string })[],
    startTime: Dayjs | string,
    endTime: Dayjs | string
) => {
    const start = typeof startTime === 'string' ? dayjs(startTime) : startTime;
    const end = typeof endTime === 'string' ? dayjs(endTime) : endTime;

    return data.some((b) => {
        const breakTimeStart = dayjs(b.startTime);
        const breakTimeEnd = dayjs(b.endTime);

        const isBreakTimeValid = breakTimeStart.diff(start) >= 0 && end?.diff(breakTimeStart) > 0;

        const isStartTimeValid = start?.diff(breakTimeStart) >= 0 && breakTimeEnd.diff(start) > 0;

        const isSameTime =
			start?.isSame(breakTimeStart, 'minute') &&
			end?.isSame(breakTimeEnd, 'minute') &&
			start?.isSame(end, 'minute');

        return isBreakTimeValid || isStartTimeValid || isSameTime;
    });
};
