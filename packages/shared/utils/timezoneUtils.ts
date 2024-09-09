import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import dayjsLib , { Dayjs } from 'dayjs';

dayjsLib.extend(utc);
dayjsLib.extend(timezone);

const defaultTimezone = dayjsLib.tz.guess();

let _timezone = defaultTimezone;

const setTimezone = (timezone: string) => {
    _timezone = timezone;
    dayjsLib.tz.setDefault(_timezone);
};

const dayjs = (date?: string | Dayjs | Date) => {
    return dayjsLib(date).tz(_timezone);
};

export {setTimezone, dayjs, Dayjs, defaultTimezone};
