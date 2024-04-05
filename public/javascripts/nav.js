const nav = document.getElementById('nav');
const image = document.querySelectorAll('.ignore');

window.addEventListener('scroll', () => {
    if (isElementInViewport(image)) {
      nav.style.backgroundColor = 'transparent';
    } else {
      nav.style.backgroundColor = 'black';
    }
  });

  function isElementInViewport(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
