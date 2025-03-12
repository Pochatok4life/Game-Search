const imageBrightness = document.querySelectorAll('.image-brightness');
const newsWrapper = document.querySelector('.news-wrapper');

imageBrightness.forEach((novelty) => {
    novelty.addEventListener('mouseover', i => {
        i.target.classList.add('active');
    });

    novelty.addEventListener('mouseout', i => {
        i.target.classList.remove('active');
    })
});

newsWrapper.addEventListener('mouseover', function(event) {
    if (event.target && event.target.matches('.news__description')) {
        event.target.previousElementSibling.classList.add('active');
        event.target.style.textDecoration = 'underline';
    }
    
    if (event.target && event.target.matches('.image-brightness')) {
        event.target.nextElementSibling.style.textDecoration = 'underline'
    }
});

newsWrapper.addEventListener('mouseout', function(event) {
    if (event.target && event.target.matches('.news__description')) {
        event.target.previousElementSibling.classList.remove('active');
        event.target.style.removeProperty('text-decoration');
    }

    if (event.target && event.target.matches('.image-brightness')) {
        event.target.nextElementSibling.style.removeProperty('text-decoration');
    }
});