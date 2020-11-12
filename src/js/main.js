import $ from './lib/lib';

$('#first').on('click', () => {
  $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
  $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
  $('.w-500').fadeToggle(800);
});

$('#trigger').click(() => $('#trigger').createModal({
  text: {
    title: 'Modal title',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsum, corrupti optio ex illum, saepe quos voluptatum omnis deserunt libero blanditiis, porro fuga non maiores nam quibusdam distinctio eos magnam.'
  }, btns: {
    count: 3,
    settings: [
      [
        'Close',
        ['btn-danger', 'mr-10'],
        true
      ],
      [
        'Save changes',
        ['btn-success'],
        false,
        () => {
          alert('Дані збережені');
        }
      ],
      [
        'Another btn',
        ['btn-warning', 'mr-10'],
        false,
        () => {
          alert('hello world');
        }
      ]
    ]
  }
}));