
function clock(){   
    let newHour = new Date()
    let hour = newHour.getHours()
    let min = newHour.getMinutes()
    let sec =  newHour.getSeconds()

    let txthour = document.getElementById('numH')

    let txtmin  = document.getElementById('numM')

    let txtsec = document.getElementById('numS')

    txthour.innerHTML= `${hour}`
    txtmin.innerHTML= `${min}`
    txtsec.innerHTML= `${sec}`

    let img = document.getElementById('banner')
    if(hour < 12){

        img.src = "../assets/Manhã.png"
        
    }else if (hour < 17){
        img.src = "../assets/tarde2.png"
        document.body.style.background = 'linear-gradient(to bottom right, #ffe599 ,#f28d3c)'

    } else if(hour < 18){
        img.src = "../assets/fim-de-tarde.png"
        document.body.style.background = 'linear-gradient(to bottom right, #f28d3c ,#27165c)'

    }else{
        img.src = "../assets/noite.png"
        document.body.style.background = 'linear-gradient(to bottom right,#27165c ,#000000 )'
        
    }


}


setInterval(clock,1000)


