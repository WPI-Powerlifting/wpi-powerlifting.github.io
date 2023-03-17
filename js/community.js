const home = document.querySelector('#home');
const community = document.querySelector('#community');
const button = document.getElementById('page-swap');

function pageSwap() {
    button.innerHTML = button.innerHTML === 'OUR COMMUNITY' ? 'HOME' : 'OUR COMMUNITY';
    home.classList.toggle("hidden");
    community.classList.toggle("hidden");
}