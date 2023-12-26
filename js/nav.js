/* ===== Update Active Nav Item ===== */
function updateActiveNavItem(sectionID) {
    var active_nav = document.querySelector(".nav-item a.active");
    if (active_nav) {
        active_nav.classList.remove("active");
    }

    var new_active_nav = document.querySelector('.nav-item a[href="#' + sectionID + '"]');
    if (new_active_nav) {
        new_active_nav.classList.add("active");
    }
}

/* ===== Update Nav Bar Active Section From Scroll =====*/
var sections = document.querySelectorAll('section');

function getCurrentSection() {
    var scrollPosition = window.scrollY + 1;

    for (var i = sections.length - 1; i >= 0; i--) {
        var section = sections[i];
        var sectionTop = section.offsetTop;
        var sectionHeight = section.clientHeight;

        // Utilisez une marge pour déterminer la visibilité de la section
        var margin = 25 * window.innerHeight / 100;
        console.log(margin)

        if (scrollPosition >= sectionTop - margin && scrollPosition < sectionTop + sectionHeight + margin) {
            return section.getAttribute('id');
        }
    }

    return sections[0].getAttribute('id');
}

function updateNavActiveSection() {
    var sectionActuelle = getCurrentSection();
    updateActiveNavItem(sectionActuelle);
}

window.addEventListener('scroll', updateNavActiveSection);

/* ===== Nav Bar Show Menu =====*/
var menu = document.querySelector('#collapse-menu-container img');
menu.addEventListener('click', function() {
    var nav_list = document.querySelector('.nav-list');
    
    nav_list.classList.toggle('display-block');
});

/* ===== Nav Bar Collapse Menue On Click ===== */
var nav_items = document.querySelectorAll(".nav-item a");

nav_items.forEach( nav_item => {
    nav_item.addEventListener('click', function() {
        
        var computedDisplay = window.getComputedStyle(menu).display;

        if (computedDisplay !== 'none') {
            var nav_list = document.querySelector('.nav-list');
            nav_list.classList.toggle('display-block');
        }
    });
});
