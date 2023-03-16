document.querySelectorAll('.item').forEach((item) => {
    item.addEventListener('click', () => {
      const container = document.querySelector('.container');
      if (item.classList.contains('item-expanded')) {
        item.classList.remove('item-expanded');
        item.style.color = '#9B2931';
        item.scrollTop = 0;
        container.style.height = 'auto';
      } else {
        item.classList.add('item-expanded');
        item.style.color = 'white';
        container.style.height = '1200px';
      }
    });
  });
  