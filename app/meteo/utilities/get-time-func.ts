export function getTimeOfDay() {
    var hour = (new Date()).getHours();
    var time_of_day = 'night';
    if (hour >= 5 && hour <= 18) {
        time_of_day = 'day';
    }
    return time_of_day;
}
