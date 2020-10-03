function clock(){
var time = new Date(),
days = time.getDay(),
dates = time.getDate(),
months = time.getMonth();

document.querySelectorAll('.calender')[0].innerHTML =
day(days) + ", " + dates + " " + mnth(months);

function day(dy){
    if(dy == 0){
        dy = "Sun"
    }else if(dy == 1){
        dy = "Mon"
    }else if(dy == 2){
        dy = "Tue"
    }else if(dy == 3){
        dy = "Wed"
    }else if(dy == 4){
        dy = "Thu"
    }else if(dy == 5){
        dy = "Fri"
    }else if(dy == 6){
        dy = "Sat"
    }return dy
}

function mnth(mn){
    if(mn == 0){
        mn = "Jan"
    }else if(mn == 1){
        mn = "Feb"
    }else if(mn == 2){
        mn = "Mar"
    }else if(mn == 3){
        mn = "Apr"
    }else if(mn == 4){
        mn = "May"
    }else if(mn == 5){
        mn = "Jun"
    }else if(mn == 6){
        mn = "July"
    }else if(mn == 7){
        mn = "Aug"
    }else if(mn == 8){
        mn = "Sep"
    }else if(mn == 9){
        mn = "Oct"
    }else if(mn == 10){
        mn = "Nov"
    }else if(mn == 11){
        mn = "Dec"
    }return mn
}

}
setInterval(clock, 1000);