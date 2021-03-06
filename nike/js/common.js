$(window).scroll(function () {
	var scrolled = $(window).scrollTop(), eleBtm, winBtm;
	$('#wrap').css('background-position-y', -(scrolled*0.1) + 'px');

		$('.fade-bottom01').each(function(){
		eleBtm = $(this).offset().top + 200;
		winBtm = scrolled + $(window).height();
		if( winBtm > eleBtm ){
			$(this).delay(300).animate({'opacity':'1','bottom':'0'},700);
		}	
	});

		$('.fade-bottom02').each(function(){
		eleBtm = $(this).offset().top + 200;
		winBtm = scrolled + $(window).height();
		if( winBtm > eleBtm ){
			$(this).delay(250).animate({'opacity':'1','bottom':'0'},700);
		}
	});

		$('.fade-bottom03').each(function(){
		eleBtm = $(this).offset().top + 220;
		winBtm = scrolled + $(window).height();
		if( winBtm > eleBtm ){
			$(this).delay(250).animate({'opacity':'1','bottom':'0'},700);
		}
	});

	$('.fade-bottom04').each(function(){
		eleBtm = $(this).offset().top + 200;
		winBtm = scrolled + $(window).height();
		if( winBtm > eleBtm ){
			$(this).delay(400).animate({'opacity':'1','bottom':'0'},700);
		}
	});
	$('.fade-bottom05').each(function(){
		eleBtm = $(this).offset().top + 300;
		winBtm = scrolled + $(window).height();
		if( winBtm > eleBtm ){
			$(this).delay(400).animate({'opacity':'1','bottom':'0'},700);
		}
	});
	$('.fade-bottom06').each(function(){
		eleBtm = $(this).offset().top + 250;
		winBtm = scrolled + $(window).height();
		if( winBtm > eleBtm ){
			$(this).delay(400).animate({'opacity':'1','bottom':'0'},700);
		}
	});
	
	$('.fade-bottom07').each(function(){
		eleBtm = $(this).offset().top + 100;
		winBtm = scrolled + $(window).height();
		if( winBtm > eleBtm ){
			$(this).delay(300).animate({'opacity':'1','bottom':'0'},700);
		}
	});

	$('.fade-bottom08').each(function(){
		eleBtm = $(this).offset().top + 200;
		winBtm = scrolled + $(window).height();
		if( winBtm > eleBtm ){
			$(this).delay(200).animate({'opacity':'1','bottom':'0'},700);
		}
	});
	
	$('.fade-bottom09').each(function(){
		eleBtm = $(this).offset().top + 200;
		winBtm = scrolled + $(window).height();
		if( winBtm > eleBtm ){
			$(this).delay(430).animate({'opacity':'1','bottom':'0'},700);
		}
	});

	$('.fade-bottom10').each(function(){
		eleBtm = $(this).offset().top + 200;
		winBtm = scrolled + $(window).height();
		if( winBtm > eleBtm ){
			$(this).delay(430).animate({'opacity':'1','bottom':'0'},700);
		}
	});

	$('.fade-bottom11').each(function(){
		eleBtm = $(this).offset().top + 200;
		winBtm = scrolled + $(window).height();
		if( winBtm > eleBtm ){
			$(this).delay(330).animate({'opacity':'1','bottom':'0'},700);
		}
	});

	$('#wrap .fade-left01').each(function(){
		eleBtm = $(this).offset().top + 550;
		winBtm = scrolled + $(window).height();
		if( winBtm > eleBtm ){
			$(this).delay(300).animate({'opacity':'1','left':'0'},700);
		}
	}); 

		$('#wrap .fade-right01').each(function(){
		eleBtm = $(this).offset().top + 550;
		winBtm = scrolled + $(window).height();
		if( winBtm > eleBtm ){
			$(this).delay(300).animate({'opacity':'1','right':'0'},700);
		}
	});

	$('#wrap .fade-right02').each(function(){
		eleBtm = $(this).offset().top + 350;
		winBtm = scrolled + $(window).height();
		if( winBtm > eleBtm ){
			$(this).delay(250).animate({'opacity':'1','right':'0'},700);
		}
	});

	$('#wrap .fade-left02').each(function(){
		eleBtm = $(this).offset().top + 350;
		winBtm = scrolled + $(window).height();
		if( winBtm > eleBtm ){
			$(this).delay(250).animate({'opacity':'1','left':'0'},700);
		}
	});


});


	$('.active-area .scale').mouseover(function(){
		$('.active-area .origin-img').css('display','none');
		$('.active-area .over-img').css('display','block');

	
	});
	$('.active-area div').mouseleave(function(){
		$('.active-area .origin-img').css('display','block','transform','scale(1.0)','transition','0.5s');
		$('.active-area .over-img').css('display','none');
	});	

