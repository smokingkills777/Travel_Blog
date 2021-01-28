var isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function() {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

var listItems = document.querySelectorAll(".wrapper");

function scrolling(e) {


    for (var i = 0; i < listItems.length; i++)  {
        let item = listItems[i]
        if (isPartiallyVisible(item)) {
            item.classList.add("active");
            item.classList.add("animate__animated");
            if (i == 0 || i == 1 || i == 2 || i == 5 || i == 7 || i == 8 || i == 9) {
                item.classList.add("animate__bounceInLeft");
            } else {
                item.classList.add("animate__bounceInRight");
            }
        }
    }

/*   for (const [elem, index] of listItems.entries()) {
    if (isPartiallyVisible(elem)) {
        elem.classList.add("active");
        elem.classList.add("animate__animated");
/*         if (index == 1 || index == 4 || index == 6) {
            elem.classList.add("animate__bounceInLeft");
        } 
     } */
}

function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;

  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}

function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();

  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;

  return ((top >= 0) && (bottom <= window.innerHeight));
}