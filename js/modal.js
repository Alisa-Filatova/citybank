var promoLinks = document.querySelectorAll('.promo__link');
var modalWindow = document.querySelector('.modal-window');
var overlay =  document.querySelector('.overlay');

function onClickPromoLink(event) {
    event.preventDefault();

    overlay.classList.remove('invisible');
    modalWindow.classList.remove('invisible');
}

Array.prototype.forEach.call(promoLinks, function(promoLink) {
    promoLink.addEventListener('click', onClickPromoLink);
});

modalWindow.addEventListener('click', function(event) {
    event.preventDefault();

    if (event.target.tagName.toLowerCase() === 'button')  {
        modalWindow.classList.add('invisible');
        overlay.classList.add('invisible');
    }
});
