/***MASONRY */
let elem = document.querySelector('.GaleryContainer');
let msnry = new Masonry( elem, {
  // options
  itemSelector: '.GaleryItem',
  columnWidth: 230,
        gutter: 20,
        isFitWidth: true
});

