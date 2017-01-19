export function getTimeOfDay() {
    var hour = (new Date()).getHours();
    var period = 'night';
    if (hour >= 5 && hour <= 18) period = 'day';
    return period;
}
