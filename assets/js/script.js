$(document).ready( function () {

    // Save Button Event Listener
    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save Items to local storage
        localStorage.setItem(time, value);
        console.log(time);
        console.log(value);
    });

    function hourChecker () {
        var currentHour = moment().hours();

        // go through the time blocks
        $(".time-block").each(function () {
            var hourBlock = parseInt($(this).attr("id").split("-")[1]);

            if (hourBlock < currentHour) {
                $(this).addClass("past");
            }
            else if (hourBlock === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
    });
}

hourChecker();

// interval to check if the hour needs to move
var interval = setInterval(hourChecker, 15000);

// load saved date from local storage
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

$("#currentDay").text(moment().format("dddd, MMMM Do"));
});