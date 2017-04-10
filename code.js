$(window).resize(function () { 
    $('body').css('padding-top', parseInt($('#main-navbar').css("height")));
});

$(window).load(function () { 
    $('body').css('padding-top', parseInt($('#main-navbar').css("height")));        
});

function show_login() {
    window.open("//login.html","_self");
}

function login() {
    if ($("#username").val() == "crake") {
        window.location = ("users/crake/dashboard.html");
        return(false);
    } else {
        alert("Wrong input, try username crake");
    }
}