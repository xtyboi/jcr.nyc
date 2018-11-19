// LOAD SCRIPT

$('#about').hide();

$(document).ready(function(){
  $('#work').hide(0).delay(500).fadeIn(1000);
});

// PAGE SCRIPTS

$(document).ready(function(){
  $(".initials").mouseenter(function () {
    $('.initials').text("Info");
  });
  $(".initials").mouseleave(function () {
    $('.initials').text("JCR");
  });
});

$('.initials').click(function(){
  $('.initials').text("Info");
  $('#work').fadeOut();
  $('#about').delay(500).fadeIn();
});

$('.mobinitials').click(function(){
	$('#work').fadeOut();
  $('#about').delay(500).fadeIn();
});

$('.backbutton').click(function(){
  $('#about').fadeOut();
	$('#work').delay(500).fadeIn();
});

// GALLERY SCRIPTS

function leftArrowPressed() {
	if ( $('.active').prev('.post').length ){
		$('.active').removeClass('active').prev('.post').addClass('active');
	} else {
	 $('.active').removeClass('active');
	 $('.post').last().addClass('active');
 }
};

function rightArrowPressed() {
	if ( $('.active').next('.post').length ){
		$('.active').removeClass('active').next('.post').addClass('active');
	} else {
	 $('.active').removeClass('active');
	 $('.post').first().addClass('active');
 }
};

$('.gallery').click(function(e){
   var pWidth = $(this).innerWidth();
   var pOffset = $(this).offset();
   var x = e.pageX - pOffset.left;
	 if(pWidth/2 > x) {
		 if ( $('.active').prev('.post').length ){
	 		$('.active').removeClass('active').prev('.post').addClass('active');
		} else {
	 	 $('.active').removeClass('active');
	 	 $('.post').last().addClass('active');
	  }
	 }
	 else {
		 if ( $('.active').next('.post').length ){
	 		$('.active').removeClass('active').next('.post').addClass('active');
	 	} else {
	 	 $('.active').removeClass('active');
	 	 $('.post').first().addClass('active');
	  }
	 }
});

$('.gallery').mousemove(function(e){
   var pWidth = $(this).innerWidth();
   var pOffset = $(this).offset();
   var x = e.pageX - pOffset.left;
	 if(pWidth/2 > x) {
		 $(this).css('cursor','w-resize');
	 }
	 else {
		 $(this).css('cursor','e-resize');
	 }
});

document.onkeydown = function(evt) {
    evt = evt || window.event;
    switch (evt.keyCode) {
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
    }
};
