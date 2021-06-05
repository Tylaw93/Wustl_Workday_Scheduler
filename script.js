for(var i=9;i<18;i++){
    if(i <= 12){
    let newDiv ="<div class='row'><div class='col-1 border-top border-bottom border-dark'>" + i + "</div><div class='col-10 timeblock"+i+"'></div><div class='col-1 bg-success'></div></div>"
    $(".scheduler").append(newDiv)
    }
    else{
        let newDiv ="<div class='row'><div class='col-1 border-top border-bottom border-dark'>" + (i -12) + "</div><div class='col-10 timeblock"+i+"'></div><div class='col-1 bg-success'></div></div>"
    $(".scheduler").append(newDiv)
    }
    let currentHour = moment().format("k")
    if (currentHour < i){
        $(".timeblock"+i+"").css("background-color", "#40eb34");
    }
    else if(currentHour == i){
        $(".timeblock"+i+"").css("background-color", "blue");
    }
    else{
        $(".timeblock"+i+"").css("background-color", " #c9c9c9");
    }
}

let today = moment().format("dddd MMMM Do")
$("#currentDay").text(today);



