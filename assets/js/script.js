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

$("#currentDay").text(moment().format("dddd, MMMM Do"));
});