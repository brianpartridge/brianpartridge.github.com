javascript:(function(){
    var l = window.location, p = l.protocol;
    if (p == 'http:') { l.protocol = 'lazyeye:'; }
    else if (p == 'https:') { l.protocol = 'lazyeyes:'; }
    else { alert('Sorry, unsupported URL.'); }
})();