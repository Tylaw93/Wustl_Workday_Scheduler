let Am9 = document.querySelector("fieldInput9")
const Am10 = document.querySelector("fieldInput10")
const Am11 = document.querySelector("fieldInput11")
const Pm12 = document.querySelector("fieldInput12")
const Pm1 = document.querySelector("timeblock1")
const Pm2 = document.querySelector("timeblock2")
const Pm3 = document.querySelector("timeblock3")
const Pm4 = document.querySelector("timeblock4")
const Pm5 = document.querySelector("timeblock5")

for(var i=9;i<18;i++){
    if(i <= 12){
    let newDiv ="<div class='row'><div class='col-1 border-top border-bottom border-dark text-center'>" + (i)+"AM" + "</div><div class='col-10 timeblock"+i+"' ><textarea class='form-control  border-0 timeblock"+i+" 'id = fieldInput"+i+"' rows='2'></textarea></div><div class='col-1 saveBtn'><img src='saveIcon.png' class='center'></div></div>"
    $(".scheduler").append(newDiv)
    }
    else{
        let newDiv ="<div class='row'><div class='col-1 border-top border-bottom border-dark text-center'>" + (i -12)+"PM" + "</div><div class='col-10 timeblock"+i+"'><textarea class='form-control  border-0 timeblock"+i+"' rows='2'></textarea></div><div class='col-1 saveBtn'><img src='saveIcon.png' class='center'></div></div>"
    $(".scheduler").append(newDiv)
    }
    let currentHour = moment().format("k")
    if (currentHour < i){
        $(".timeblock"+i+"").addClass("future");
        $(".timeblock"+i+"").removeClass("present");
        $(".timeblock"+i+"").removeClass("past");

    }
    else if(currentHour == i){
        $(".timeblock"+i+"").addClass("present");
    }
    else{
        $(".timeblock"+i+"").addClass("past") ;
    }
}
$(document).ready(function(){
    $('.saveBtn').on('click', function(){
        var value= $(this).siblings('.col-10').val();
        console.log(value) 
    })
})
  

let today = moment().format("dddd MMMM Do")
$("#currentDay").text(today);



