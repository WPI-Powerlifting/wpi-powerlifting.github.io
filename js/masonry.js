document.querySelectorAll('.item').forEach((item) => {
    item.addEventListener('click', () => {
      const container = document.querySelector('.container');
      if (item.classList.contains('item-expanded')) {
        item.classList.remove('item-expanded');
        item.scrollTop = 0;
        container.style.height = 'auto';
      } else {
        item.classList.add('item-expanded');
        let offeset = item.getAttribute('id') === 'contact' ? 500 : 40;
        container.style.height = (item.scrollHeight + offeset) + 'px';
      }
    });
  });
  