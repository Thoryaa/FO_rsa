//open menu and close it[home page]
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
menuToggle.onclick = function() {
        navigation.classList.toggle('open');
    } //make list active and delete active state
const list = document.querySelectorAll('.list ');

function activelink() {

    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');

}
list.forEach((item) => item.addEventListener('click', activelink))