import './lib/lib';
import $ from './lib/lib';

$('div').show();

$('.active').addClass('hello', 'world'); 

$('.active').toggleClass('ioan');

$('button').on('click', function() {
  $('div').eq(2).toggleClass('active');
});

$('.active').click(sayHello);

function sayHello() {
  console.log('Hello');
}

$('div').click(function() {
  console.log($(this).index());
});

// console.log($('div').eq(2).find('.more'));


// console.log($('button').html('hello'));

// console.log($('.some').closest('.findme'));

// console.log($('.more').eq(0).siblings());

$('button').fadeIn(1800);