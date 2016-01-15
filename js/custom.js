---
---
var options = [{selector: 'footer', offset: 50, callback: 'slide()' }];

$(document).ready(showtime);

function showtime(){
    var w = window.location.href;
    var pos = w.indexOf("?page=");
    if (pos == -1){ var pid = "{{site.starter}}"; }
    else{ var pid = w.substring(pos+6); }
    showid(pid);
    /*shownav(pid);
    
    $('.modal-trigger').leanModal();
    Materialize.scrollFire(options);
    droparrow();
    $('main .post > p > img').click(
        function() {
            if ($(this).hasClass("active")){
                $(this).attr("src","{{site.baseurl}}/img/svg/down.svg");
                $(this).parent().next().slideDown();
            } else {
                $(this).attr("src","{{site.baseurl}}/img/svg/right.svg");
                $(this).parent().next().slideUp();
            };
            $(this).toggleClass('active');
        }
    );
    */
}

function showid(sid){
    $(".resume").each(
        function () {
            if ($(this).attr('id') == sid){ $(this).css("display", "block"); }
            else { $(this).css("display", "none"); }
        }
    );
}

function shownav(sid){
    $(".resume").each(
        function () {
            if ($(this).attr('id') == sid){
                $(this).find("h5").attr("id");
            }
        }
    );
}

/*
function slide() {
    if ( $("#fixed-bot").is(":hidden") ) { $("#fixed-bot").slideDown(1200); };
}

function droparrow(){
    $('main .post > p').prepend('<img src="{{site.baseurl}}/img/svg/right.svg" />');
}
*/