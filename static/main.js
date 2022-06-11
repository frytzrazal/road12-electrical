document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('#gallery img').forEach(function(elem) {
    elem.addEventListener('click', function() {
      // const data = elem.getAttribute('data-img');
      const instance = basicLightbox.create(`
        <img src="${elem.src}" />
      `)
      instance.show();
    });  
  });
});