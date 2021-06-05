for(var i=9;i<18;i++){
    if(i <= 12){
    let newDiv ="<div class='row'><div class='col-1 border-top border-bottom border-dark'>" + i + "</div><div class='col-10 timeblock'></div><div class='col-1 bg-success'></div></div>"
    $(".scheduler").append(newDiv)}
    else{
        let newDiv ="<div class='row'><div class='col-1 border-top border-bottom border-dark'>" + (i -12) + "</div><div class='col-10 timeblock'></div><div class='col-1 bg-success'></div></div>"
    $(".scheduler").append(newDiv)
    }
}

let today = moment().format("dddd MMMM Do")
$("#currentDay").text(today);

let currentHour = moment().format("k")


if (currentHour < i){
    $(".timeblock").css("background-color", "#40eb34")
}
else if(currentHour == i){
    $(".timeblock").css("background-color", "#40eb34")
}
else{
    $(".timeblock").css("background-color", " #c9c9c9")
}

