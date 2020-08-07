const secondsHand = document.querySelector(".seconds");
const minutesHand = document.querySelector(".minutes");
const hoursHand = document.querySelector(".hours");

function clock()
{
    const time = new Date();

    const seconds = time.getSeconds();
    const secondsDegree = (( seconds / 60 ) * 360 );
    secondsHand.style.transform = `translateY(${-100}%) rotate(${secondsDegree}deg)`;

    const minutes = time.getMinutes();
    const minutesDegree = (((minutes / 60) * 360) + ((seconds/60)*6));
    minutesHand.style.transform = `translateY(${-100}%) rotate(${minutesDegree}deg)`;

    const hours = time.getHours();
    const hoursDegree = ((hours / 12) * 360) + ((minutes/60)*30);
    hoursHand.style.transform = `translateY(${-100}%) rotate(${hoursDegree}deg)`;
}
setInterval(clock, 1000);


