// show current date
let currentDate = moment().format("dddd MMMM DD, YYYY");
$("#currentDay").html(currentDate);


$(document).ready(function() {

function setColorBlock() {
    let currentHr = moment().format("HH");
    console.log(moment().format("HH"));
    for (var i = 09; i < 18; i++) {
        console.log(currentHr, $("#textarea").data("time"));
     debugger;
        
        }
    };


    setInterval(function() {
    setColorBlock();
}, 1000);

});
    


