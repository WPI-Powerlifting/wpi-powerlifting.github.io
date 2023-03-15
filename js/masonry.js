document.querySelectorAll('.item').forEach((item) => {
    item.addEventListener('click', () => {
      if (item.classList.contains('item-expanded')) {
        item.classList.remove('item-expanded');
        item.scrollTop = 0;
      } else {
        item.classList.add('item-expanded');
      }
    });
  });
  