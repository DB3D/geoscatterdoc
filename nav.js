// nav.js

$(window).ready(function() {
    function encode_frag(page, article) {
        if (page == "") {
            // remove hash..
            // if ("pushState" in history) {
            //     history.pushState("", document.title, window.location.pathname + window.location.search);
            // }
            top.window.location.hash = "#";
        } else {
            if (article != "") {
                // top.window.location.hash = "#page=" + page + "&article=" + article;
                top.window.location.hash = "#" + page + "&" + article;
            } else {
                top.window.location.hash = "#" + page;
            }
        }
    }
    function decode_frag() {
        var r = {
            page: undefined,
            article: undefined,
        };
        if (top.window.location.hash != "") {
            try {
                // take out `#`
                var h = top.window.location.hash.substring(1);
                if (h != "") {
                    var p = h.split('&');
                    if (p.length == 1) {
                        // var s = p[0].split('=')
                        // if (s[0] == 'page') {
                        //     r.page = s[1];
                        // }
                        r.page = p[0];
                    }
                    if (p.length == 2) {
                        // var s = p[0].split('=')
                        // if (s[0] == 'page') {
                        //     r.page = s[1];
                        // }
                        // var s = p[1].split('=')
                        // if (s[0] == 'article') {
                        //     r.article = s[1];
                        // }
                        r.page = p[0];
                        r.article = p[1];
                    }
                    return r;
                }
            } catch (error) {
                console.log(error);
                top.window.location.hash = "#";
            }
        }
        return r;
    }
    function frag_to_state() {
        try {
            var f = decode_frag();
            
            if (typeof f.page === "undefined") {
                encode_frag("", "");
                default_url = "./pages/Features.html";
                $('#main_page_frame').attr('src', default_url);
                return;
            }
            
            var url = './pages/' + f.page + '.html';
            if (typeof f.article !== "undefined") {
                $('#main_page_frame').attr('src', url + "#" + f.article);
            } else {
                $('#main_page_frame').attr('src', url);
            }
            $('.menu-item a').removeClass('active');
            $(".menu-item a[data-url='" + url +"']").addClass('active');
        } catch (error) {
            console.log(error);
            top.window.location.hash = "#";
        }
    }
    function in_iframe() {
        try {
            return window.self !== window.top;
        } catch (e) {
            return true;
        }
    }
    function in_docs_frame() {
        if (in_iframe()) {
            // NOTE: lets assume there will be no other `docs.html`
            return window.location.href.split('/').slice(-1) == 'docs.html'
        }
        return false;
    }
    function in_page_frame() {
        if (in_iframe()) {
            // NOTE: lets assume there will be no other `docs.html`
            return window.location.href.split('/').slice(-1) != 'docs.html'
        }
        return false;
    }
    
    if (in_page_frame()) {
        /*
        // make article headers change url in top and jump at them
        $('a[data-frag] h1[id]').click(function(event) {
            try {
                event.preventDefault();
                var a = $(this).parent().attr('data-frag');
                var u = window.location.href;
                var p = u.split('/').slice(-1)[0].split('.')[0];
                top.location.hash = "#page=" + p + "&article=" + a;
                window.location.hash = "#" + a;
            } catch (error) {
                console.log(error);
            }
        });
        */
    } else {
        // make menu buttons change url
        var ls = $('.menu-item a');
        for (var i = 0; i < ls.length; i++) {
            $e = $(ls[i]);
            var u = $e.attr('data-url');
            $e.click(function(event) {
                // stop link setting hash
                event.preventDefault();
                var u = $(this).attr('data-url');
                var a = u.split('/');
                encode_frag(a[2].split('.')[0], "");
            });
        }
        
        // if url is already requested jump to page and article (if available)
        frag_to_state();
    }
    
});
