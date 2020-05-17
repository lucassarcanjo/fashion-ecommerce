// Dropdown Menu Footer
const dropdown = document.querySelectorAll('.dropdown');
const dropdownArray = Array.prototype.slice.call(dropdown, 0);

dropdownArray.forEach((element) => {
    const button = element.querySelector('a[data-toggle="dropdown"]'),
          menu = element.querySelector('.dropdown-menu'),
          arrow = button.querySelector('i.material-icons');
    
    button.onclick = (event) => {
        if(!menu.hasClass('show')) {
            menu.classList.add('show');
            menu.classList.remove('hide');
            // slideToggle('fast');
            arrow.classList.add("open");
            arrow.classList.remove("close");
            event.preventDefault();
        }
        else {
            menu.classList.remove('show');
            menu.classList.add('hide');
            // slideToggle('fast');
            arrow.classList.remove("open");
            arrow.classList.add("close");
            event.preventDefault();
        }
    };
});

Element.prototype.hasClass = function (className) {
    return (
      this.className &&
      new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className)
    );
};

// Back to top Button
const backToTopBtn = $('.back-to-top');

$(window).scroll(function(e) {
    if(backToTopBtn.offset().top >= 1000) {
        if(!backToTopBtn.is(":visible")) {
            backToTopBtn.show();
        }
    }
    else {
        backToTopBtn.hide();
    }
})