// Page Loader

$(document).ready(function(){
    $(".page-loader").fadeOut(1000);
    $(".page").fadeIn(1000);
  });


// COUNTDOWN TIMER

// Set the date we're counting down to
var countDownDate = new Date("Jun 6, 2020 14:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);



// FAQ ACCORDION

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}




// Radio Button Check RSVP Form

$('input:radio[name="Diet Restrictions"]').change(function () {
    if ($(this).val() == 'Yes') {
        $(".diet-input input:nth-child(4)").fadeIn(1000);
    } else {
        $(".diet-input input:nth-child(4)").fadeOut(1000);
    }
});

$("form").submit(function () {
    $(".rsvp-modal").fadeIn(1000);
});

$(".modal-close").click( function(){
    $(".rsvp-modal").fadeOut(1000);
});


// Stay Grid

$(".stay-details-button").click(function() {
    $(this).next().css("max-height", "100%");
    $(this).fadeOut(500);
});


// Photo Gallery

$(".all-photos p").click(function() {
    $(".column >div").fadeIn(1500);
    $(".all-photos").fadeOut(500);
});

$(".column img").click(function() {
    var image = $(this).attr("src");
    $("html").css("overflow-y","hidden");
    $(".photo-modal").fadeIn(1000);
    $(".photo-modal div").css("background-image", "url('" + image + "')");

});

$(".photo-modal i").click(function() {
    $("html").css("overflow-y","scroll");
    $(".photo-modal").fadeOut(1000);
});