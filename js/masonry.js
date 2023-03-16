const items = document.querySelectorAll('.item');
const container = document.querySelector('.container');

items.forEach((item) => {
  item.addEventListener('click', () => {
    const isExpanded = item.classList.toggle('item-expanded');
    if (isExpanded) {
      if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        container.style.height = '1200px';
      }
    } else {
      item.scrollTop = 0;
      container.style.height = 'auto';
    }
  });
});
