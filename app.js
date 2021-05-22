const list = document.createElement('ul');
// const form = $('form');
// const button = $('button');
// button.click(showMovies());

// function showMovies(){
// const $movieTitle = $('select#title').val();
// console.log($movieTitle);
// const $movieRating = $('#rating').value;
// $('body').append($movieTitle).append($movieRating); 
// }

$('button').on('click', function (e) {
    e.preventDefault();
    const movie_rating = $('#title').val() + " " + $('#rating').val();
    const movie = document.createElement('div');
    movie.innerText = movie_rating;
    $('body').append(movie);
    const remove = document.createElement('button');
    remove.innerText = 'X';
    movie.append(remove);
    remove.classList.add('remove-button');
    $('.remove-button').on('click', function(e) {
        e.target.parentElement.remove();
    })
    $('#title').val('');
    $('#rating').val('');
});