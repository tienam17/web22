function getID(id) { return document.getElementById(id); };
var OSDVN = OSDVN || {};
var OSDVN = (function() {
    "use strict";
    // Variables
    if (window.XMLHttpRequest) {
        var xmlhttp = new XMLHttpRequest();
    } else {
        var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var OSDVN = {
        window_Width: window.innerWidth
    };
    OSDVN.createoverlay = function() {
        var fakediv = getID('fakebg');
        var popupdiv = getID('popupdiv');
        if (fakediv) {
            return fakediv.parentNode.removeChild(fakediv);
        } else {
            var div = document.createElement('div');
            div.style.cssText = 'left:0;top:0;right:0;bottom:0;position:fixed;z-index:333999;background-color:rgba(0,0,0,.65)';
            div.setAttribute('id', 'fakebg');
            getID("header").appendChild(div);
        }
    };
    OSDVN.runSearch = function(e) {
        if (e.keyCode == 13) {
            return OSDVN.search('header__search-input', false);
        }
    };

    OSDVN.changeLang = function(code) {
        document.getElementById('idlang').value = code;
        document.getElementById('formlang').submit();
    };

    OSDVN.scrollTop = function(id) {
        const element = getID(id);
        const top = element.getBoundingClientRect().top;
        window.scrollTo({
            top,
            behavior: 'smooth'
        });

    };

    OSDVN.scrollTarget = function(id) {
        getID(id).scrollIntoView({ behavior: 'smooth' });
    };

    OSDVN.hoverSearch = function(id) {
        var el = getID(id);
        OSDVN.removeClass(el, 'hide');
    };

    OSDVN.toggleSearch = function(id) {
        var el = getID(id);
        OSDVN.toggleClass(el, 'hide');
    };

    OSDVN.createPopup = function() {
        var fakediv = getID('fakebg');
        var popupdiv = getID('popupdiv');
        OSDVN.createoverlay();
        if (popupdiv) {
            return popupdiv.parentNode.removeChild(popupdiv);
        } else {
            var div = document.createElement('div');
            div.style.cssText = 'left:50%;top:50%;max-width:420px;min-height:180px;transform: translateX(-50%);margin-top:-90px;position:fixed;z-index:334999;background-color:rgba(255,255,255,.95)';
            div.setAttribute('id', 'popupdiv');
            div.innerHTML = '<span onclick=\"OSDVN.closeup();\" class=\"t--c grey h2 n--m icon-cancel right\"><\/span><div id="popin"></div>';
            getID("header").appendChild(div);
        }
    };

    OSDVN.closeup = function() {
        var fakediv = getID('fakebg');
        var popupdiv = getID('popupdiv');
        fakediv.parentNode.removeChild(fakediv);
        popupdiv.parentNode.removeChild(popupdiv);
    };

    OSDVN.hasClass = function(el, className) {
        if (el.classList)
            return el.classList.contains(className)
        else
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
    };

    OSDVN.addClass = function(el, className) {
        if (el.classList)
            el.classList.add(className)
        else if (!OSDVN.hasClass(el, className)) el.className += " " + className
    };

    OSDVN.removeClass = function(el, className) {
        if (el.classList)
            el.classList.remove(className)
        else if (OSDVN.hasClass(el, className)) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
            el.className = el.className.replace(reg, ' ')
        }
    };

    OSDVN.toggleClass = function(el, className) {
        if (OSDVN.hasClass(el, className)) OSDVN.removeClass(el, className)
        else OSDVN.addClass(el, className)
    };

    OSDVN.togglesubMenu = function(event, item, el) {
        if (this.window_Width < 768) {
            event.preventDefault();
            OSDVN.toggleClass(item, 'red');
            var id = getID(el);
            OSDVN.toggleClass(id, 'hide');
            OSDVN.toggleClass(id, 'absolute');
        } else {
            return true;
        }
    };

    OSDVN.search = function(inputid, top) {
        var search = getID(inputid).value;
        var url = 'index.php?route=news/search';
        if (search) {
            url += '&search=' + encodeURIComponent(search);
        }
        if (top === true) {
            var category = getID('category').value;
            if (category > 0) {
                url += '&category_id=' + category;
            }
        }
        location = url;
    };

    OSDVN.displaySearch = function(el) {
        var searchbox = getID(el);
        OSDVN.removeClass(searchbox, 'hide');
    };

    OSDVN.toggleNav = function(e, el) {
        var catlist = document.getElementById("box__category");
        if (catlist) {
            var submenus = catlist.querySelectorAll(".submenu");
            for (var i = 0; i < submenus.length; i++) {
                OSDVN.addClass(submenus[i], 'hide');
            }
            var activeitems = catlist.querySelectorAll("a.active");
            for (var i = 0; i < activeitems.length; i++) {
                OSDVN.removeClass(activeitems[i], 'active');
            }
        }
        var submenu = getID(el);
        OSDVN.toggleClass(e, 'active');
        OSDVN.toggleClass(submenu, 'hide');
    };

    OSDVN.toggleMenuMobile = function() {
        var fakediv = getID('fakebg');
        var popupdiv = getID('popupdiv');
        var menub = getID('menubutton');
        var menum = getID('topmenu');
        var menuc = getID('menu-close');
        OSDVN.createoverlay();
        OSDVN.toggleClass(menub, 'menuopen');
        OSDVN.toggleClass(menuc, 'is-active');
        OSDVN.toggleClass(menuc, 'hide');
        OSDVN.toggleClass(menum, 'hide');
    };
    return OSDVN;
})();

if(OSDVN.window_Width<769) {
window.addEventListener("load", function() {
    var search__btn = document.getElementById('search__btn--mobile'),
        search__wrap = getID('search'),
        bell__btn = getID('menu-bell'),
        topright__menu = getID('toprightmenu'),
        menu__btn = getID('menubutton'),
        topper = getID('topper'),
        megamenu = getID('megamenu'),
        bigmenu__level1 = megamenu.querySelectorAll('li.bigmenu__level1'),
        under = document.getElementById('language');

    search__btn.addEventListener('click',function(e){
        OSDVN.toggleClass(search__wrap,'hide');
        OSDVN.toggleClass(search__btn.querySelector('i'),'im-x-mark');
    });
    bell__btn.addEventListener('click',function(e){
        OSDVN.toggleClass(topright__menu,'hide');
        OSDVN.addClass(megamenu,'hide');
        OSDVN.toggleClass(bell__btn.querySelector('i'),'im-x-mark');
    });
    menu__btn.addEventListener('click',function(e){
        OSDVN.addClass(topright__menu,'hide');
        OSDVN.removeClass(bell__btn.querySelector('i'),'im-x-mark');
        OSDVN.toggleClass(megamenu,'hide');
        OSDVN.toggleClass(menu__btn.querySelector('i'),'im-x-mark');
    });

    var alla = megamenu.querySelectorAll('.bigmenu__level1 > a'),    
    u=0, lenu=alla.length;
    
    for(; u<lenu; u++) {
        var e = alla[u];
        var d = document.createElement('span');
        d.innerHTML = e.innerHTML;
        e.parentNode.replaceChild(d, e);
    }
    

    let dung=0, len=bigmenu__level1.length;

    for(; dung<len; dung++) {
        bigmenu__level1[dung].addEventListener('click',function(e){
            var els = megamenu.querySelectorAll('.bigmenu__level1');
            for (var i = 0; i < els.length; i++) {
                OSDVN.removeClass(els[i],'active');
            }
            
            OSDVN.toggleClass(this,'active');
            if(this.querySelector('ul')){
                OSDVN.toggleClass(this.querySelector('ul'),'active');
            }
        });
    }


    var sPortlets = document.querySelectorAll('.portlet--small i');
    let s=0, slen=sPortlets.length;

    for(; s<slen; s++) {
        sPortlets[s].addEventListener('click',function(e){
            OSDVN.toggleClass(this,'active');
            OSDVN.toggleClass(this.closest('div.portlet__in'),'active');
        });
    }

    under.addEventListener('click',function(e){
        alert('This page is under construction!');
        return false;
    });
});   
} 