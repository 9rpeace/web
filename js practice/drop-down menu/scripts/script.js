window.onload = function(){

document.getElementById('nav').onmouseover = function (event) {
    let target = event.target;
    if (target.class == 'menu-item') {
        let s = target.getElementByClassName ('submenu');
        closeMenu ();
        s[0].style.display = 'block';
    }
}

document.onmouseover = function(event) {
    if (target.className!='menu-item' && target.className!='submenu'){closeMenu()};
}

function closeMenu () {
    let menu = document.getElementById('nav');
    let submenu = document.getElementsByClassName('submenu');
    for (let i = 0; i < submenu.length; i++) {
        submenu[i].style.display="none";
    }
          
    }
}
