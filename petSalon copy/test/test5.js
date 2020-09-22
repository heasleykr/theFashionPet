// css JQuery
// outter function because you want it to load AFTER Html
$(function(){
    'use strict';

    //change background img
    $('header img').css({'width': '100px'});
    $('main h2').css({
       'color': '#dedede',
       'text-transform': 'uppercase' //no comma on last
    });

    function changeColor(){
        $('nav.menu').css({'background-color': 'red'});
    }

    function defaultColor(){
        $('nav.menu').css({'background-color': 'white'});
    }

    //No parenthesis needed on function calling here
    $('nav.menu').on('mouseenter', changeColor); 
    $('nav.menu').on('mouseleave', defaultColor);

    
})