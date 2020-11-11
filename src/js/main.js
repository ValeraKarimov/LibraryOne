import './lib/lib';
import $ from './lib/lib';

$('div').show();

$('.active').addClass('hello', 'world'); 

$('.active').toggleClass('ioan');

$('button').on('click', function() {
  $(this).toggleClass('active');
});

$('.active').click(sayHello);

function sayHello() {
  console.log('Hello');
}