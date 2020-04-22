// COUNTDOWN TIMER

// Set the date we're counting down to
var countDownDate = new Date("Sep 6, 2020 12:30:00").getTime();

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

$(".modal-close").click(function () {
    $(".rsvp-modal").fadeOut(1000);
});


// Stay Grid

$(".stay-details-button").click(function () {
    $(this).next().css("max-height", "100%");
    $(this).fadeOut(500);
});


// Photo Gallery

$(document).on("click", ".all-photos p", function () {
    $(".column >div").fadeIn(1500);
    $(".all-photos").fadeOut(500);
});

$(document).on("click", ".column img", function () {
    var image = $(this).attr("src");
    console.log(image)
    $("html").css("overflow-y", "hidden");
    $(".photo-modal").fadeIn(1000);
    $(".photo-modal div").css("background-image", "url('" + image + "')");

});

$(document).on("click", ".photo-modal i", function () {
    $("html").css("overflow-y", "scroll");
    $(".photo-modal").fadeOut(1000);
});

// Page Loader

window.onload = (event) => {
    $(".page-loader").fadeOut(1000);
    $(".page").fadeIn(1000);
    $(".photo-section").html(galleryContent)
    $(".snazzy-map").html(`<iframe src="https://snazzymaps.com/embed/170028"></iframe>`);
};





// Photo Section Content
const galleryContent = `
<h1 class="section-heading">Photo Gallery</h1>
<div class="photo-grid-big">
    <div>
        <h1 class="section-heading">Engagement Shoot</h1>
        <div class="row">
            <div class="column">
                <img src="./assets/images/Gallery/Engagement/1.jpg">
                <img src="./assets/images/Gallery/Engagement/3.jpg">
                <div>
                    <img src="./assets/images/Gallery/Engagement/5.jpg">
                    <img src="./assets/images/Gallery/Engagement/7.jpg">
                    <img src="./assets/images/Gallery/Engagement/11.jpg">
                    <img src="./assets/images/Gallery/Engagement/12.jpg">
                    <img src="./assets/images/Gallery/Engagement/10.jpg">
                    <img src="./assets/images/Gallery/Engagement/13.jpg">
                    <img src="./assets/images/Gallery/Engagement/15.jpg">
                </div>
            </div>
            <div class="column">
                <img src="./assets/images/Gallery/Engagement/2.jpg">
                <img src="./assets/images/Gallery/Engagement/9.jpg">
                <div>
                    <img src="./assets/images/Gallery/Engagement/4.jpg">
                    <img src="./assets/images/Gallery/Engagement/8.jpg">
                    <img src="./assets/images/Gallery/Engagement/12.jpg">
                    <img src="./assets/images/Gallery/Engagement/14.jpg">
                    <img src="./assets/images/Gallery/Engagement/16.jpg">
                    <img src="./assets/images/Gallery/Engagement/17.jpg">
                    <img src="./assets/images/Gallery/Engagement/6.jpg">
                </div>
            </div>
        </div>
    </div>
    <div>
        <h1 class="section-heading">Wedding Venue</h1>
        <div class="row">
            <div class="column">

                <img src="./assets/images/Gallery/Venue/1.jpg">

                <img src="./assets/images/Gallery/Venue/11.jpg">
                <div>
                    <img src="./assets/images/Gallery/Venue/5.jpg">
                    <img src="./assets/images/Gallery/Venue/7.jpg">

                    <img src="./assets/images/Gallery/Venue/3.jpg">
                    <img src="./assets/images/Gallery/Venue/12.jpg">
                    <img src="./assets/images/Gallery/Venue/13.jpg">

                    <img src="./assets/images/Gallery/Venue/17.jpg">
                </div>
            </div>
            <div class="column">
                <img src="./assets/images/Gallery/Venue/12.jpg">
                <img src="./assets/images/Gallery/Venue/2.jpg">
                <div>
                    <img src="./assets/images/Gallery/Venue/6.jpg">
                    <img src="./assets/images/Gallery/Venue/8.jpg">
                    <img src="./assets/images/Gallery/Venue/10.jpg">
                    <img src="./assets/images/Gallery/Venue/4.jpg">
                    <img src="./assets/images/Gallery/Venue/9.jpg">
                    <img src="./assets/images/Gallery/Venue/14.jpg">
                    <img src="./assets/images/Gallery/Venue/16.jpg">
                    <img src="./assets/images/Gallery/Venue/18.jpg">
                    <img src="./assets/images/Gallery/Venue/15.jpg">

                </div>

            </div>
        </div>
    </div>
</div>
<div class="all-photos">
    <p>View More</p>
</div>

<div class="photo-modal">
    <i style="font-family:sans-serif;font-style:normal">&#10005;</i>
    <div>
    </div>
</div>
`