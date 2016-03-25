$(document).ready(function() {


var date = new Date ;
    monthA = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',');
    document.getElementById("my_date").innerHTML = ('0' + date.getDate()).slice(-2) + ' ' + (monthA[date.getMonth() + 1])  + ' ' + date.getFullYear()
;

    // page is now ready, initialize the calendar...

    $('#calendar').fullCalendar({
        lang : "ru",
        header : {
            left: "",
            center: "title",
            right: ""
        },
        fixedWeekCount: false
    });

    $('#calendar_day').fullCalendar({
        defaultView : 'basicWeek' ,
        lang : "ru",
        contentHeight: 150,
        header: false,
        dayNamesShort: ['воскресение', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        titleFormat: "D MMMM YYYYY"
        // put your options and callbacks here
    });

    $('.fc-day').append('<div class=""><img src="img/weather/big_cloud.png" alt="cloud"></div>');
    $('.fc-day').append('<div><h1>+40 &deg;C</h1></div>');
    $('.fc-day').append('<div><p>Скорость ветра 5 м/c</div>');


}); 
