// var timeblockButton = $('timeblock-btn');
// var saveButton = $('save-btn');
// var refreshButton = $('refresh-btn');
// To start planner display current day at the top of the calendar


$(document).ready(function(){
    // need to create variables for input and time association 
    // store those variables in local storage
    $('#currentDay').text(moment().format('dddd, MMMM'))  

$('.saveBtn').on('click', function() {
    var input = $(this).siblings('.text').val();
    var time = $(this).parent().attr('id');
    localStorage.setItem(time, input)
})
function hourupdate(){
    var currentHour= moment().hour()
    $(".time-block").each(function(){
       var blockHour=parseInt($(this).attr('id').split('-')[1])    
    if(blockHour<currentHour){
    
    $(this).addClass("past")
}
else if(blockHour===currentHour){
    $(this).removeClass("past")
    $(this).addClass("present")
}
else{
    $(this).removeClass("past")
    $(this).removeClass("present")
    $(this).addClass("future")

}
}) 
}

hourupdate()
// LOAD saved data from local storage
$('#hour-9 .text').val(localStorage.getItem('hour-9'));
$('#hour-10 .text').val(localStorage.getItem('hour-10'));
$('#hour-11 .text').val(localStorage.getItem('hour-11'));
$('#hour-12 .text').val(localStorage.getItem('hour-12'));
$('#hour-13 .text').val(localStorage.getItem('hour-13'));
$('#hour-14 .text').val(localStorage.getItem('hour-14'));
$('#hour-15 .text').val(localStorage.getItem('hour-15'));
$('#hour-16 .text').val(localStorage.getItem('hour-16'));
$('#hour-17 .text').val(localStorage.getItem('hour-17'));

// Presentation of timeblock for standard business hours

// Color code timeblock to indicate past, present and future when opened

// Onclick on a timeblock to enter an event

// Onclick the save button to save event in local storage

// Click event to refresh the page for saved events to persist



})


