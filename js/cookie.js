function setCookie(name, value, days) { // from http://www.quirksmode.org/js/cookies.html
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 60 * 30));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
    }

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

window.onload = function () {
    var klas = getCookie('samplecookie');
    console.log(klas);
    if (klas) {
        if (klas=="icia-f1"){
            document.getElementById('icia-f1').click();
            document.getElementById('roosterf1').style.display = 'block';
            document.getElementById('roosterf3').style.display = 'none';
        }// or .checked=true;

        else if (klas=="icia-f3"){
            document.getElementById('icia-f3').click();
            document.getElementById('roosterf1').style.display = 'none';
            document.getElementById('roosterf3').style.display = 'block';
        }

    }
    document.getElementById('buttons').onclick = function () {
        var m = document.getElementById('icia-f1');
        var f = document.getElementById('icia-f3');
        if (m.checked) {
            setCookie('samplecookie', m.value, 30);
            document.getElementById('roosterf1').style.display = 'block';
            document.getElementById('roosterf3').style.display = 'none';
        }
        else if (f.checked) {
            setCookie('samplecookie', f.value, 30);
            document.getElementById('roosterf1').style.display = 'none';
            document.getElementById('roosterf3').style.display = 'block';
        }
    }


};