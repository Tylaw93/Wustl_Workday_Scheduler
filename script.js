for(var i=9;i<18;i++){
    if(i <= 12){
    let newDiv ="<div class='row'><div class='col-1 border-top border-bottom border-dark text-center'>" + (i)+"AM" + "</div><div class='col-10 timeblock"+i+"' ><textarea class='form-control  border-0 timeblock"+i+"' rows='2'></textarea></div><div class='col-1 saveBtn'><img src='saveIcon.png' class='center'></div></div>"
    $(".scheduler").append(newDiv)
    }
    else{
        let newDiv ="<div class='row'><div class='col-1 border-top border-bottom border-dark text-center'>" + (i -12)+"PM" + "</div><div class='col-10 timeblock"+i+"'><textarea class='form-control  border-0 timeblock"+i+"' rows='2'></textarea></div><div class='col-1 saveBtn'><img src='saveIcon.png' class='center'></div></div>"
    $(".scheduler").append(newDiv)
    }
    let currentHour = moment().format("k")
    if (currentHour < i){
        $(".timeblock"+i+"").addClass("future");
    }
    else if(currentHour == i){
        $(".timeblock"+i+"").addClass("present");
    }
    else{
        $(".timeblock"+i+"").addClass("past") ;
    }
}



let today = moment().format("dddd MMMM Do")
$("#currentDay").text(today);



