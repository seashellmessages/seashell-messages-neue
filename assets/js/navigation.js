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

function isMobile() {
    return $(window).width() <= 1024;
}

function changeLogoOnMobile() {
    if (isMobile())
    {
        $("#seashell-logo").attr("src", "/images/Seashell_logo_claim_rasterised_no_edge_no_text.png")
    }
    else
    {
        $("#seashell-logo").attr("src", "/images/Seashell_logo_claim_rasterised_no_edge.png")
    }
}

function reloadOnSubmit() {
    submit_button = $(".submit-button");
    contact_form = $(".contact-form");

    submit_button.click(function () {
            contact_form.trigger("reset");
        }
    );
}

function openMenuMobile() {
    let mobile_nav_button = $(".mobile-nav-button");
    let nav_menu = $(".navigation");

    mobile_nav_button.click(
        function () {
            if (nav_menu.is(":hidden")) {
                nav_menu.slideDown( "slow" );
            } else {
                nav_menu.slideUp( "slow" );
            }
        }
    );
}

function validateForm() {
    $.validator.addMethod("valueNotEquals", function(value, element, arg){
        return arg !== value;
    }, "Please select a service.");
    contact_form = $(".contact-form");
    contact_form.validate({
        rules: {
            Dropdown: { valueNotEquals: "-Select-" }
        }
    });
    reloadOnSubmit()
}

$(document).ready(function(){

    changeLogoOnMobile();
    openMenuMobile();
    validateForm();

    $( window ).scroll(function () {
        if (!isMobile()) {
            stickyHeader();
        }
    });

    $(window).resize(function () {
        changeLogoOnMobile();
    });
});
