document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
  
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      } else {
        document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');
      }
    });
  });
  