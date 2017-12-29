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
});