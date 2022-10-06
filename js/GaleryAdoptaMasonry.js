/***MASONRY */
let elem = document.querySelector('.GaleryContainer');
let msnry = new Masonry( elem, {
  // options
  itemSelector: '.GaleryItem',
  columnWidth: 240,
  gutter:22,
  isfitwhidth: true,
});

