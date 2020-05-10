/**
 * Created by thomas on 11/02/2017.
 */

function stickyHeader() {

    let navigation = $(".navigation");
    let site_header = $(".site-header");

    if ( $(window).scrollTop() >= site_header.offset().top + site_header.outerHeight(true)) {
        navigation.addClass("sticky-nav");

    } else {
        navigation.removeClass("sticky-nav");
    }

}

function toggleMobileMenu() {

    let mobile_nav_menu = $(".mobile-nav-menu");

    mobile_nav_menu.show();

    mobile_nav_menu.animate({
            left: parseInt(mobile_nav_menu.css("left")) == 0 ? parseInt(-mobile_nav_menu.outerWidth()) : 0
    }, {
        always: darkenPage
    });
}

function closeMobileMenu() {

    let mobile_nav_menu = $(".mobile-nav-menu");
    mobile_nav_menu.hide();

    if (parseInt(mobile_nav_menu.css("left")) > parseInt(-mobile_nav_menu.outerWidth())) {
        mobile_nav_menu.animate({
            left: parseInt(-mobile_nav_menu.outerWidth())
        }, {
            always: function () {
                darkenPage();
            }
        });
    }
}

function changeLogoOnMobile() {
    if ($(window).width() <= 1000)
    {
        $("#seashell-logo").attr("src", "/images/Seashell_logo_claim_rasterised_no_edge_no_text.png")
    }
    else
    {
        $("#seashell-logo").attr("src", "/images/Seashell_logo_claim_rasterised_no_edge.png")
    }
}

$(document).ready(function(){

    changeLogoOnMobile();

    $( window ).scroll(function () {
        stickyHeader();
    });

    $(window).resize(function () {
            closeMobileMenu();
            changeLogoOnMobile();
        }
    );

});
