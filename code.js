$(window).resize(function () { 
    $('body').css('padding-top', parseInt($('#main-navbar').css("height")));
});

$(window).load(function () { 
    $('body').css('padding-top', parseInt($('#main-navbar').css("height")));        
});

function show_login() {
    window.open("//login.html","_self");
}