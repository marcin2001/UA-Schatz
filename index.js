	$('.span1').click( function() {
			$('.span1').css('color' , 'white' )
			$(this).css( 'color' , '#eeb804' )
		})
		$('.but').click(function(){
			$('.ovr').css('display' , 'flex')
			$('.ovr').click(function(){
				$('.ovr').css( 'display' , 'none' )
			})
			$('.addreg').click(function(){
				$('.ovr').css( 'display' , 'block' )
			})
		})
		$('.cl1').click(function(){
			$('html, body').animate({
	        scrollTop: $('.Up').offset().top - 108}, 2000);
		})
		$('.cl2').click(function(){
			$('html, body').animate({
	        scrollTop: $('.warmw').offset().top - 128}, 2000);
		})
		$('.cl3').click(function(){
			$('html, body').animate({
	        scrollTop: $('.web-kard').offset().top - 57}, 2000);
		})
		$(document).scroll(function(){
			if( $(document).scrollTop() > 70 ){
				$('.head').addClass('ad-cl' )
			} else {
				$('.head').removeClass('ad-cl')
			}

				if( $(document).scrollTop() > $('.Up').offset().top - 109 ){
					$('.span1').css('color' , 'white')
					$('.cl1').css('color' , '#eeb804')
				}
				if( $(document).scrollTop() >   $('.warmw').offset().top - 129){
					$('.span1').css('color' , 'white')
					$('.cl2').css('color' , '#eeb804')
				}
				if( $(document).scrollTop() > $('.web-kard').offset().top - 58){
					$('.span1').css('color' , 'white')
					$('.cl3').css('color' , '#eeb804')
				}
			
				
		})