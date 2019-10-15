var a = document.querySelector('thead input');
var b = document.querySelectorAll('tbody input');
a.addEventListener('click', function() {
    if (a.checked) {
        for (var i = 0; i < b.length; i++) {
            b[i].checked = true
        }
    } else {
        for (var i = 0; i < b.length; i++) {
            b[i].checked = false
        }
    }
})
document.querySelector('table').addEventListener('click', function() {
    var haschecked = 0;
    for (var i = 0; i < b.length; i++) {
        if (b[i].checked) {
            haschecked += 1
        }
    }
    console.log(haschecked)
    if (haschecked == b.length) {
        a.checked = true
    } else if (haschecked < b.length) {
        a.checked = false
    }
})