
jQuery(document).ready(function() {

    /*
        Background slideshow
    */
    $('.coming-soon').backstretch([
      "img/backgrounds/1.jpg"
    , "img/backgrounds/2.jpg"
    , "img/backgrounds/3.jpg"
    ], {duration: 10000, fade: 750});

    /*
        Countdown initializer
    */
    var now = new Date();
    var countTo = 25 * 24 * 60 * 60 * 1000 + now.valueOf();
    $('.timer').countdown(countTo, function(event) {
        var $this = $(this);
        switch(event.type) {
            case "seconds":
            case "minutes":
            case "hours":
            case "days":
            case "weeks":
            case "daysLeft":
                $this.find('span.'+event.type).html(event.value);
                break;
            case "finished":
                $this.hide();
                break;
        }
    });

});

