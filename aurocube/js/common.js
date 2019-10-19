(window.onload = function() {
    var select = document.querySelectorAll(".menu__link_select");
    var submenu = document.querySelectorAll(".submenu__link");
    var nav = document.querySelectorAll(".navigation__elem");
    var block = document.querySelectorAll(".block");

    for (var i = 0; i < select.length; i++) {

        select[i].onclick = function(e) {
            e.preventDefault();
            var parent = e.target.parentElement;
            var submenu = parent.querySelector(".submenu__content");
            submenu.classList.toggle("submenu__content_active");
        }

    }

    window.addEventListener("click", function(e) {
        var submenu = document.querySelectorAll(".submenu__content");
        if (!e.target.classList.contains("menu__link_select")) {
            submenu.forEach(function(item, i, arr) {
                item.classList.remove("submenu__content_active");
            })
        }
    })

    for (var i = 0; i < submenu.length; i++) {

    submenu[i].onclick = function(e) {
        e.preventDefault();
        var text_1 = e.target.innerText,
            text_2 = select[0].innerText,
            subcontent = e.target.parentElement.parentElement;
        
        submenu.forEach(function(item, i, arr) {
            item.innerText = text_2;
        });

        select.forEach(function(item, i, arr) {
            item.innerText = text_1;
        });

        subcontent.classList.remove("submenu__content_active");
    }

    }

    function scrollTo(element, to, duration) {
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;
            
        var animateScroll = function(){        
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if(currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }

    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d/2;
          if (t < 1) return c/2*t*t + b;
          t--;
          return -c/2 * (t*(t-2) - 1) + b;
      };

    for (var i = 0; i < nav.length; i++) {
        nav[i].addEventListener("click", function(e) {
            for (var j = 0; j < nav.length; j++) {
                    nav[j].classList.remove("navigation__elem_active");
                if (e.target.parentElement == nav[j]) {
                    nav[j].classList.add("navigation__elem_active");
                }
            }
        })
    };
    
});

$(document).ready(function() {
    $(".fullpage").fullpage({
        verticalCentered: false,
        dragAndMove: "vertical",
        anchors: ["", "","thirdPage", "fouthPage"],
        css3: true,
        'onLeave': function(index, nextIndex, direction) {
            var nav = document.querySelectorAll(".navigation__elem"),
                nav_a = document.querySelector(".navigation__elem_active");

            nav_a.classList.remove("navigation__elem_active");
            nav[nextIndex-1].classList.add("navigation__elem_active");
        }
    });
});