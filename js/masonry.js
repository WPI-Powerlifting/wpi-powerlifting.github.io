const homeItems = document.querySelectorAll('#home .item');
const communityItems = document.querySelectorAll('#community .item');

function handleClick(item, container) {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const isExpanded = item.classList.toggle('item-expanded');
  if (isExpanded) {
    if(!isMobile){
      container.style.height = '1400px';
    }
  } else {
    item.scrollTop = 0;
    if(!isMobile){
      container.style.height = 'auto';
    }
  }
}

homeItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    if (event.target.tagName !== 'A'){
      const container = document.getElementById('home');
      handleClick(item, container);
    }
  });
});

communityItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    if (event.target.tagName !== 'A'){
      const container = document.getElementById('community');
      handleClick(item, container);
    }
  });
});
