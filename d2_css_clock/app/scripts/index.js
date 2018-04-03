(function() {
    'use strict';

    const secondHand = document.querySelector('.clock-box--hand__second');
    const minuteHand = document.querySelector('.clock-box--hand__minute');
    const hourHand = document.querySelector('.clock-box--hand__hour');

    const itemMap = {
        seconds: secondHand,
        minutes: minuteHand,
        hours: hourHand
    };
    const disableTransition = (isDisable, item) => {
        if (isDisable) {
            itemMap[item].style.transition = 'none';
        } else {
            itemMap[item].style.transition = 'all 0.05s';
            itemMap[item].style.transitionTimingFunction = 'cubic-bezier(0.1, 2.7, 0.58, 1)';
        }
    }

    const checkCondition = (timeItem) => {
        if(timeItem.count === 0) {
            disableTransition(true, timeItem.name);
        } else if (timeItem.count === 1) {
            disableTransition(false, timeItem.name);
        }
    }

    function setDate() {
        const now = new Date();

        const seconds = now.getSeconds();
        // console.log(seconds);
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        checkCondition({name: 'seconds', count: seconds});
        // console.log(secondsDegrees);
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const minutes = now.getMinutes();
        const minutesDegrees = ((minutes / 60) * 360) + 90;
        checkCondition({name: 'minutes', count: minutes});
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

        const hours = now.getHours();
        const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
        checkCondition({name: 'hours', count: hours});
        console.log(hoursDegrees);
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

        console.log(`Seconds: ${seconds}; Minutes: ${minutes}; Hours: ${hours}`);
    }

    setInterval(setDate, 1000);

    setDate();

}());