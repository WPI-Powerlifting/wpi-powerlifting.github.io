const items = document.querySelectorAll('.item');
const container = document.querySelector('.container');

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

items.forEach((item) => {
  item.addEventListener('click', () => {
    const isExpanded = item.classList.toggle('item-expanded');
    if (isExpanded) {
      if(!isMobile){
        container.style.height = '1200px';
      }
    } else {
      item.scrollTop = 0;
      if(!isMobile){
        container.style.height = 'auto';
      }
    }
  });
});
