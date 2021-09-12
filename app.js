const secondHand = document.querySelector('.rotate-three')
const minuteHand = document.querySelector('.rotate-two')
const hourHand = document.querySelector('.rotate-one')
const body = document.querySelector('body') 
const clock = document.querySelector('.clock')

const timer = () =>{
    const currentTime= new Date();
    const second = (currentTime.getSeconds()/60);
    const minute = (second + currentTime.getMinutes())/60;
    const hour = (minute + currentTime.getHours())/12;
    const currentHour = currentTime.getHours()

    if (currentHour >= 18){
        body.style.backgroundImage =  "url('flat-mountains-night.svg')";
        clock.style.backgroundColor = '#0a3b32';
    }else if (currentHour >= 6){
        body.style.backgroundImage =  "url('flat-mountains.svg')";
        clock.style.backgroundColor = '#dd6d0b';
    }

    changeTime(secondHand,second)
    changeTime(minuteHand,minute)
    changeTime(hourHand,hour)

};

const changeTime = (hand, time) =>{
    hand.style.setProperty('--rotation', time*360)
   /* let rotate = time * 360
    hand.style.transform = `translateX(-50%) rotate(${rotate}deg)`*/ //if ypu dont want to use the custom variable in css
}


setInterval( timer ,1000);

timer()