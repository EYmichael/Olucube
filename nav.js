





if (window.innerWidth < 768) {
    var menu = document.querySelector(".head_nav-items_sub-con");
    menu.style.display = "none";
    var closeMenu = document.querySelector(".close-icon");
    var openMenu = document.querySelector(".menu-icon")

    function menuButt() {
        if (menu.style.display == "none") {
            closeMenu.style.transform = "scale(0.80)";
            menu.style.display = "flex";
        }
    }

    function closeMenuButt() {
        if (menu.style.display = "flex") {
            closeMenu.style.transform = "scale(0)";
            menu.style.display = "none";
        }
    }
}
