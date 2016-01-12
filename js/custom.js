---
---

var options = [
    {selector: 'footer', offset: 50, callback: 'slide()' }
];

$(document).ready(showtime);

function showtime(){
    var w = window.location.href;
    var pos = w.indexOf("?page=");
    if (pos == -1){ var pid = "{{site.starter}}"; }
    else{ var pid = w.substring(pos+6); }
    showid(pid);
    
    $('.modal-trigger').leanModal();
    //Materialize.scrollFire(options);
    droparrow();
}

function showid(sid){
    $(".resume").each(
        function () {
            if ($(this).attr('id') == sid){ $(this).css("display", "block"); }
            else { $(this).css("display", "none"); }
        }
    );
}

function slide() {
    if ( $("#fixed-bot").is(":hidden") ) {
        $("#fixed-bot").slideDown(1200);
    }
}

function droparrow(){
    $('main .post > p').prepend('<img src="{{site.baseurl}}/img/svg/down.svg" />');
}
