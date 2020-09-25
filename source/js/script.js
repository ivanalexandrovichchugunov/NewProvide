// $(function () {
// 	var elWrap = $('#slider'),
// 		el =  elWrap.find('img'),
// 		indexImg = 1,
// 		indexMax = el.length;
	
// 	function change () {
// 		el.fadeOut(500);
// 		el.filter(':nth-child('+indexImg+')').fadeIn(500);
// 	}	
	
// 	elWrap.append('<span class="next"></span><span class="prev"></span>');
	
// 	$('span.next').click(function() {
// 		indexImg++;
// 		if(indexImg > indexMax) {
// 			indexImg = 1;
// 		}
// 		change ();
// 	});
// 	$('span.prev').click(function() {
// 		indexImg--;
// 		if(indexImg < 1) {
// 			indexImg = indexMax;
// 		}
// 		change ();
// 	});	
// });




// jQuery(document).ready(function(){
// 	function htmSlider(){
// 	 /* Зададим следующие параметры */
// 	 /* обертка слайдера */
// 	 var slideWrap = jQuery('.slide-wrap');
// 	 /* кнопки вперед/назад и старт/пауза */
// 	 var nextLink = jQuery('.next-slide');
// 	 var prevLink = jQuery('.prev-slide');
// 	 var playLink = jQuery('.auto');
// 	 /* Проверка на анимацию */
// 	 var is_animate = false;
// 	 /* ширина слайда с отступами */
// 	 var slideWidth = jQuery('.slide-item').outerWidth();
// 	 /* смещение слайдера */
// 	 var scrollSlider = slideWrap.position().left - slideWidth;
		   
// 	 /* Клик по ссылке на следующий слайд */
// 	 nextLink.click(function(){
// 	  if(!slideWrap.is(':animated')) {
// 	   slideWrap.animate({left: scrollSlider}, 500, function(){
// 		slideWrap
// 		 .find('.slide-item:first')
// 		 .appendTo(slideWrap)
// 		 .parent()
// 		 .css({'left': 0});
// 	   });
// 	  }
// 	 });
   
// 	 /* Клик по ссылке на предыдующий слайд */
// 	 prevLink.click(function(){
// 	  if(!slideWrap.is(':animated')) {
// 	   slideWrap
// 		.css({'left': scrollSlider})
// 		.find('.slide-item:last')
// 		.prependTo(slideWrap)
// 		.parent()
// 		.animate({left: 0}, 500);
// 	  }
// 	 });
// 	}
// 	/* иницилизируем функцию слайдера */
// 	htmSlider();
//    });

var res = $(".dropdown-menu");
$(".knop").on("click", funk);

$(document).click(function(e) {
  if ($(e.target).closest(res).length || $(e.target).closest('.knop').length) return;
  res.fadeOut(100);
  e.stopPropagation();
});

function funk(){
  if(res.css("display") == "none"){
    res.fadeIn(100);
  }
  else{
    res.fadeOut(100);
  }
}
