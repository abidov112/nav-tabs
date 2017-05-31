$(document).ready(function () {
    $('li').click(function () {
       var number = $(this).data('target'); //4

       $('.menu li').removeClass('active'); // 
       $(this).addClass('active');

       $('.content').removeClass('active');
       $('#tab-' + number).addClass('active');

    });
});