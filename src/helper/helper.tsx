import dayjs from "dayjs";

export function diffTime(time: Date | string) {
    const times = dayjs(time).diff(dayjs(),'second');
    let d = '0';
    let i = '00';
    let s = '00';
    if (times > 86400) {
        d = Math.floor(times / 86400) + '';
    }
    const hour = times % 86400;
    if (hour > 3600) {
        i = Math.floor(hour / 3600) + '';
        if (parseInt(i) < 10) {
            i = '0' + i;
        }
    }
    const minute = hour % 3600;
    if (minute > 0) {
        s = Math.floor(minute / 60) + '';
        if (parseInt(s) < 10) {
            s = '0' + s;
        }
    }

    return d + 'd:' + i + 'h:' + s + 'm';
}
