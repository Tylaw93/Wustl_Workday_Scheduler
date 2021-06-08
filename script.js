let list  = ["9AM","10AM","11AM","12PM","1PM","2PM","3PM","4PM","5PM"];
list.forEach(element => {
    localStorage.getItem(element)
});
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
        $(".timeblock"+i+"").removeClass("future");
        $(".timeblock"+i+"").removeClass("past");
    }
    else{
        $(".timeblock"+i+"").addClass("past");
        $(".timeblock"+i+"").removeClass("present");
        $(".timeblock"+i+"").removeClass("future");
    }
}
$(document).ready(function(){
    $('.saveBtn').on('click', function(){
        event.preventDefault();
        var value= $(this).siblings(".col-10").children().val();
        var key = $(this).siblings(".col-1").text();
        localStorage.setItem(key,value)
        console.log(localStorage)
    })
    
})
  

let today = moment().format("dddd MMMM Do")
$("#currentDay").text(today);



