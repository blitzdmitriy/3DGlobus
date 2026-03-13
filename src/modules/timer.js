const timer = (deadLine) => {
    const timerHours = document.getElementById("timer-hours")
    const timerMinutes = document.getElementById("timer-minutes")
    const timerSeconds = document.getElementById("timer-seconds")

    const addZero = (num) => {
       return num > 9 ? num : "0" + num

    }
    
    const getTimeRemaining = () => {
        let dateStop = new Date(deadLine).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let hours = Math.floor((timeRemaining / 60 / 60) % 24)
        let minutes = Math.floor(timeRemaining / 60 % 60)
        let seconds = Math.floor(timeRemaining % 60)
        
        return { timeRemaining, hours, minutes, seconds }
    }

    const updateClock = () => {
        let getTime = getTimeRemaining()

        if (getTime.timeRemaining <= 0) {
            clearInterval(setIntervalUpdateTimer)
            timerHours.textContent = "00"
            timerMinutes.textContent = "00"
            timerSeconds.textContent = "00"
        } else {
        
            timerHours.textContent = addZero(getTime.hours)
            timerMinutes.textContent = addZero(getTime.minutes)
            timerSeconds.textContent = addZero(getTime.seconds)
        }

        // if (getTime.timeRemaining > 0) {
        //     setTimeout(updateClock, 1000)
        // }

    }

    updateClock()

    const setIntervalUpdateTimer = setInterval(updateClock, 1000,);
    // countTimer(`${new Date().getDate() + 1} march 2026`)
    // setInterval(countTimer, 1000, `${new Date().getDate() + 1} march 2026`)

    

}


export default timer