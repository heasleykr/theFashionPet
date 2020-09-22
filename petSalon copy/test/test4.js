$(function(){
    'use strict';

    //Display difference css class on mouse interaction
    $('main').on({
        click:function(){
            $(this).addClass('red-bg');
        },
        mouseenter:function(){
            $(this).addClass('active');
        },
        mouseleave:function(){
            $(this).removeClass('active red-bg');
        }
    });

    // replace h2 title
    var text = $('main h2').text();
    console.log(text);
    $('main h2').text('<h1> Hello World</h1>'); //will add pure text. 
    $('main h2').html('<h1> Hello World</h1>'); // will add HTML code

    // challenge: click on footer & change h2 text
    $('footer').on({
        click:function(){
            $('main h2').html('<h1>Changing My Header!</h1>');
        }
    });

    // change heading image!
    $('header img').on('click', function(){
        $(this).attr('src', '../img/cleanSpace.jpg');
    });

    
})