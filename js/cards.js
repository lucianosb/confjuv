$(document).ready(function(event) {
	
	$("div#swipe_like").on( "click", function() {
		swipeLike();
	});	

	$("div#swipe_dislike").on( "click", function() {
		swipeDislike();
	});	

	addNewProfile();

	function swipe() {
		Draggable.create("#proposta", {
		   	throwProps:true,
		   	onDragEnd:function(endX) {
	   			if(Math.round(this.endX) > 0 ) {
	   				swipeLike();			
	   			}
	   			else {
	   				swipeDislike();
	   			}
	   			console.log(Math.round(this.endX));
			}
		});
	}

	function swipeLike() {
		
			var $photo = $("div.cards").find('#proposta');

			var swipe = new TimelineMax({repeat:0, yoyo:false, repeatDelay:0, onComplete:remove, onCompleteParams:[$photo]});
			swipe.staggerTo($photo, 0.8, {bezier:[{left:"+=400", top:"+=300", rotation:"60"}], ease:Power1.easeInOut});

			addNewProfile();
	}

	function swipeDislike() {
		
			var $photo = $("div.cards").find('#proposta');

			var swipe = new TimelineMax({repeat:0, yoyo:false, repeatDelay:0, onComplete:remove, onCompleteParams:[$photo]});
			swipe.staggerTo($photo, 0.8, {bezier:[{left:"+=-350", top:"+=300", rotation:"-60"}], ease:Power1.easeInOut});

			addNewProfile();
	}

	function remove(photo) {
	    $(photo).remove();
	}

	function addNewProfile() {
		var names = ['Proposta 01', 'Proposta 02'][Math.floor(Math.random() * 2)];
		var desc = ['Lorem ipsum dolor sit amet, eum no viderer molestie percipitur. Ea vis eirmod iuvaret concludaturque, sonet admodum accusamus nec ad.','Mea purto sonet te. Ut quo assum nostrum, vel justo suavitate cu, veniam malorum sit no. Eu has vocent quaeque.'][Math.floor(Math.random() * 2)]
		
		$("div.cards").prepend('<div class="card" id="proposta">'
    	+ '<div class="card-main">'
        + '<div class="card-img">'
        + '<img alt="alt text" src="images/samples/landscape.jpg">'
        + '<p class="card-img-heading">'+names+'</p></div>'
    	+ '<div class="card-inner"><p>'+desc+'</p></div>' 
    	+ '<div class="card-action">' 
    	+ '<ul class="nav nav-list pull-right">'
        + '<li><a href="javascript:void(0)"><span class="icon icon-open-in-new text-blue"></span>&nbsp;<span class="text-blue">Acessar</span></a></li><li><a href="javascript:void(0)"><span class="icon icon-comment"></span>&nbsp;Comentar</a></li><li><a href="javascript:void(0)"><span class="icon icon-notifications"></span>&nbsp;Seguir</a></li>'
        + '</ul></div>'
    	+ '</div></div>');

    	swipe();
	}

});
