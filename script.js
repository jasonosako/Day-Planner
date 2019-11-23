// show current date
let currentDate = moment().format("dddd MMMM DD, YYYY");
$("#currentDay").html(currentDate);


$(document).ready(function() {

function setColorBlock() {
    let currentHr = moment().format("HH");
    console.log(moment().format("HH"));
    $(".color-rows").each(function() {
    let colorThis = ($(this).attr("id"));
    console.log(colorThis);
        //var color = $(this).attr('id');

    if (currentHr > colorThis) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
    };

    if (currentHr === colorThis) {
        $(this).removeClass("past");
        $(this).addClass("present");
    };

    if (currentHr < colorThis) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("fuure");
    };
});
    
   // var setColor = $(".color-rows").attr("id");
   // console.log(setColor);
    //$(".starting-screen").hide();
    
   // $(".color-rows").each(function() {
       // console.log(".color-rows")
      //  let rowColors = 
    //})
   
      //  console.log(currentHr);
   
        //}
    };

    setInterval (function() {
    setColorBlock();
}, 30000);

});
  
let saveBtn = $(".saveBtn");
saveBtn.on("click", function() {
    let timeId = $(this).attr("id");
    let textId = $(this).parent().siblings().children(".desription").val();
    localStorage.setItem(timeId, textId);
})


