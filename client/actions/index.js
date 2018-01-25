$(() => {
  $('button').click(() => {
    const input = $('input').val();
    let request = new Request('http://localhost:8000/sortString', {
      method: 'post',
      body: JSON.stringify({string: input}),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    fetch(request)
      .then(result => {
        return result.json();
      })
      .then(sorted => {
        $('#input').append(`<div class="input-item">${input}</div>`);
        $('#sorted').append(`<div class="sorted-item">${sorted}</div>`);
      });
  })
});