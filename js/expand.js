var cards = document.querySelector('.cards__wrapper');
var posts = document.querySelectorAll('.post');

var TABLET_WIDTH = 768;

function getPageWidth() {
    var xScroll;
    
    if (window.innerHeight && window.scrollMaxY) {
        xScroll = document.body.scrollWidth;
    } else if (document.body.scrollHeight > document.body.offsetHeight) { 
        xScroll = document.body.scrollWidth;
    } else if (document.documentElement 
        && document.documentElement.scrollHeight > document.documentElement.offsetHeight
    ) { 
        xScroll = document.documentElement.scrollWidth;
    } else { 
        xScroll = document.body.offsetWidth;
    }
    
    var windowWidth;
    
    if (self.innerHeight) { 
        windowWidth = self.innerWidth;
    } else if (document.documentElement && document.documentElement.clientHeight) { 
        windowWidth = document.documentElement.clientWidth;
    } else if (document.body) { 
        windowWidth = document.body.clientWidth;
    }

    if (xScroll < windowWidth) {
        return windowWidth;
    } else {
        return xScroll;
    }
}

cards.addEventListener('click', function(event) {
    event.preventDefault(); 

    if (event.target.tagName.toLowerCase() === 'button') {
        event.target.parentNode.classList.toggle('expanded');
    } 
});

var pageWidth = getPageWidth();

if (pageWidth <= TABLET_WIDTH) {
    Array.prototype.forEach.call(posts, function(item) {
        item.classList.add('expanded');
    });
} else {
    Array.prototype.forEach.call(posts, function(item) {
        item.classList.remove('expanded');
    });
}
