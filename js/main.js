
// SHOW SCROLL TO TOP ARROW
var arrow = document.querySelector('#scrollToTop');
window.addEventListener('scroll', function () {
  // console.log(window.pageYOffset);
  if(window.pageYOffset > 150) {
    arrow.classList.add('showArrow');
    arrow.style.transform = "scale(1)";
  } else {
    arrow.classList.remove('showArrow');
    arrow.style.transform = "scale(0)";
  }
});

// SCROLL TO ELEMENT
var el = document.querySelectorAll('a:not(.footerA)');
for (var i = 0; i < el.length; i++) {
  el[i].addEventListener('click', function (e) {
    e.preventDefault();
    var element = e.srcElement.getAttribute('href');
    var target = document.querySelector(element);

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
