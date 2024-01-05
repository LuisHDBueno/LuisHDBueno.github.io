function openMain(toOpen) {
    var activeMain = document.querySelector(".main-inner[data-state='active']");
    activeMain.style.display = "none";
    activeMain.setAttribute('data-state', 'inactive');

    var activeMenu = document.querySelector(".menu-button[data-state='active']");
    activeMenu.setAttribute('data-state', 'inactive');

    console.log(toOpen);
    var mainToOpen = document.querySelector('#' + toOpen + '.main-inner');
    mainToOpen.style.display = "flex";
    mainToOpen.setAttribute('data-state', 'active');

    var menuToOpen = document.querySelector('#' + toOpen + '.menu-button');
    menuToOpen.setAttribute('data-state', 'active');
}