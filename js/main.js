var elButton = document.querySelector(".site-header__button");
var elNav = document.querySelector('.nav');

elButton.addEventListener('click', function(){
    elNav.classList.toggle('nav--open');
});