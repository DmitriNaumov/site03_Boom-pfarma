$(function(){

	'use strict';

	//script for open messenger
	$('.open-fone').click(function(){
		$('.nav__info').toggleClass('open');
		$(this).toggleClass('open');
	});


	//script for open/close mobile menu
	$('.burger-menu').click(function(){
		$('.nav__category').addClass("active");
		$('.close-mobile-menu').addClass("active");
	});
	$('.close-mobile-menu').click(function(){
		$('.nav__category').removeClass("active");
		$(this).removeClass("active");
	});


	//script for open/close search mobile
	$('.search-mob-button').click(function(){
		$('.nav__top .nav__search').addClass("active");
		$('.close-mobile-search').addClass("active");

		setTimeout(function(){
			$('.search__input').focus();
			$('.search__after').addClass('active');
		}, 600);
	});
	$('.close-mobile-search').click(function(){
		$('.nav__top .nav__search').removeClass("active");
		$(this).removeClass("active");
	});


	//script for search mobile
	$('.search__input').focus(function(){
		$('.search__after').addClass('active');
	});
	$('.search__input').focusout(function(){
		$('.search__after').removeClass('active');
	});


	//script for open/close popap__cart
	$('.basket').click(function(){
		$('.popap__cart').fadeIn(200);
		$('.popap__cart-close').addClass("active");

	});
	$('.popap__cart').click(function(){
		$(this).fadeOut(200);
		$('.popap__cart-close').removeClass("active");
		$('.popap__cart-bl').click(function(e){
			e.stopPropagation();
		});
	});



	//script for open/close mobile filter
	$('.mobile-button-filter').click(function(){
		$('.filter').fadeIn();
		$('.filter-mobile-close').addClass("active");
	});
	$('.filter-mobile-close').click(function(){
		$('.filter').fadeOut();
		$(this).removeClass("active");
	});


	//script for hover in advantages section
	$(window).on('load resize', function(){
		var sectionSize = $('#advantages').width();
		var divSize     = $('.advantages__list').width();
		var rezSize     = (sectionSize - divSize)/2;
		$('.advantages__hover.adv__right .advantages__bg').css({"left": - rezSize});
		$('.advantages__hover.adv__left .advantages__bg').css({"right": - rezSize});
	});


	//script for tabs
    var $wrapper = $('.tab-wrapper'),
        $allTabs = $wrapper.find('.tab-content > div'),
        $tabMenu = $wrapper.find('.tab-menu li'),
        $line    = $('<div class="line"></div>').appendTo($tabMenu);

      $allTabs.not(':first-of-type').hide();
      $tabMenu.filter(':first-of-type').find(':first').width('100%')

      $tabMenu.each(function(i) {
        $(this).attr('data-tab', 'tab'+i);
      });

      $allTabs.each(function(i) {
        $(this).attr('data-tab', 'tab'+i);
      });

      $tabMenu.on('click', function() {

        var dataTab     = $(this).data('tab'),
            $getWrapper = $(this).closest($wrapper);

        $getWrapper.find($tabMenu).removeClass('tab_active');
        $(this).addClass('tab_active');

        $getWrapper.find('.line').width(0);
        $(this).find($line).animate({'width':'100%'}, 'fast');
        $getWrapper.find($allTabs).hide();
        $getWrapper.find($allTabs).filter('[data-tab='+dataTab+']').show();
      });
});
