$(document).ready(function(){

	
	// валидация телефона
    var phone_vop = {"mask":"+7(999)999-99-99"};
    jQuery("#phone-01, #phone-02, #phone-03, #phone-04, #phone-05").inputmask(phone_vop);
	
	
	// Выбор иконок в блоке "Рядом с комплексом"
	$('.icon-block img').click(function(){
		$('.icon-block img').each(function(){
			var id = $(this).data('id');
			$(this).attr('src', 'img/gallery/icons/0'+id+'.png');
		});	
		var id = $(this).data('id');
		$(this).attr('src', 'img/gallery/icons/0'+id+'w.png');
	});
	
	$('.green-item__row').on('click', function() {
		$(this).parent().children('.green-item__hidden').toggle();
	});

	$('.fb-popup').fancybox();
	$('.green-btn-phone').fancybox();

	$('.p-tabs').lightTabs();



(function(){
  // setup your carousels as you normally would using JS
  // or via data attributes according to the documentation
  // https://getbootstrap.com/javascript/#carousel
  $('#carouselExampleControls-4').carousel({ interval: 5000 });
}());

(function(){
  $('#carouselExampleControls-4 .carousel-item').each(function(){
    var itemToClone = $(this);

    for (var i=1;i<4;i++) {
      itemToClone = itemToClone.next();

      // wrap around if at end of item collection
      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }

      // grab item, clone, add marker class, add to collection
      itemToClone.children(':first-child').clone()
        .addClass("cloneditem-"+(i))
        .appendTo($(this));
    }
  });
}());
});

