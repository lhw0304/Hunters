(function(){
var now = {col:1}, last = {col:0};
const towards = { up:1, down:2};
var isAnimating = false;

document.addEventListener('touchmove',function(event){
	event.preventDefault(); },false);

	$(document).swipeUp(function(){
		if (isAnimating) return;
		last.col = now.col;
		if(last.col !=4){
			now.col = last.col+1; 
			pageMove(towards.up);
		}else{
			location.href = "/login";
		}
	})

	$(document).swipeDown(function(){
		if (isAnimating) return;
		last.col = now.col;
		if(last.col!=1){
			now.col = last.col-1; 
			pageMove(towards.down);
		}
	})


	function pageMove(tw){
		var lastPage = ".page-"+last.col,
			nowPage = ".page-"+now.col;
		
		switch(tw) {
			case towards.up:
				outClass = 'pt-page-moveToTop';
				inClass = 'pt-page-moveFromBottom';
				break;
			case towards.down:
				outClass = 'pt-page-moveToBottom';
				inClass = 'pt-page-moveFromTop';
				break;
		}
		isAnimating = true;
		// $(lastPage).addClass('page-current');

		$(nowPage).removeClass("hide");
		$(lastPage).addClass(outClass);
		$(nowPage).addClass(inClass);
		
		setTimeout(function(){
			$(lastPage).removeClass('page-current');
			$(lastPage).removeClass(outClass);
			$(lastPage).addClass("hide");
			$(lastPage).find("img").addClass("hide");	
			$(nowPage).addClass('page-current');
			$(nowPage).removeClass(inClass);
			$(nowPage).find("img").removeClass("hide");
			
			isAnimating = false;
		},600);
	}

})();