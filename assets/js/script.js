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
$("#currentDay").text(moment().format("dddd, MMMM Do"));
});