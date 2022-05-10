(count =function(){
    const Bday = "11 June 2022";
    const getCOntained =document.querySelector(".contained")
    const h2 =document.querySelector("h2")
    const Countdown = new Date(Bday)
    const currentDay = new Date()
    const totalmiliSeconds = (Countdown - currentDay) / 1000
    const days = Math.floor(totalmiliSeconds / 86400)
    const hrs = Math.floor(totalmiliSeconds/3600)  % 24
    const mins = Math.floor(totalmiliSeconds/60) % 60
    const seconds = Math.floor(totalmiliSeconds) %60
 
    const dayEl = document.querySelector(".day")
    const hrsEl =  document.querySelector(".hrs")
    const minsEL =  document.querySelector(".mins")
    const secEl = document.querySelector('.sec')
    
    dayEl.innerHTML =  days;
    hrsEl.innerHTML = hrs
    minsEL.innerHTML =mins
    secEl.innerHTML = seconds

    if((days <0)&&(hrs<0) &&(mins <0) &&(seconds <0)){
        
    dayEl.innerHTML=0
    hrsEl.innerHTML = 0
    minsEL.innerHTML =0
    secEl.innerHTML = 0
    }
    

  })();
  setInterval( count , 1000)