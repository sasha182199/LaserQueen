   </script>

	<!--[if lt IE 9]>
	<script src="libs/html5shiv/es5-shim.min.js"></script>
	<script src="libs/html5shiv/html5shiv.min.js"></script>
	<script src="libs/html5shiv/html5shiv-printshiv.min.js"></script>
	<script src="libs/respond/respond.min.js"></script>
	<![endif]-->

	<!-- Load Scripts Start -->
	<script src="/js/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="/js/swiper.min.js"></script>
	<script>var scr = {"scripts":[
		{"src" : "/js/libs.js", "async" : false},
		{"src" : "/js/swiper.min.js", "async" : false},
		{"src" : "/js/common.js", "async" : false}
		]};!function(t,n,r){"use strict";var c=function(t){if("[object Array]"!==Object.prototype.toString.call(t))return!1;for(var r=0;r<t.length;r++){var c=n.createElement("script"),e=t[r];c.src=e.src,c.async=e.async,n.body.appendChild(c)}return!0};t.addEventListener?t.addEventListener("load",function(){c(r.scripts);},!1):t.attachEvent?t.attachEvent("onload",function(){c(r.scripts)}):t.onload=function(){c(r.scripts)}}(window,document,scr);
	</script>

	<script type="text/javascript" src="/scrollmagic/TweenMax.min.js"></script>
	<script type="text/javascript" src="/scrollmagic/ScrollMagic.js"></script>
	<script type="text/javascript" src="/scrollmagic/animation.gsap.js"></script>
	<script>

		// scroll_animation
		if( $(window).width() > 1260) { 
			var w = screen.width;
			if (w>1919){
			n = 10;
			}
			else{
			n = 0;
			}

			if (w<1280){
			k = 100;
			}
			else{
			k = 0;
			}
			var controller = new ScrollMagic.Controller();
			var scene = new ScrollMagic.Scene({ 
				triggerElement: "#trigger1", 
				duration: 1, 
				offset: 380,
				reverse:false
		})
			.setTween("#animate1", 0.5, {"margin-top" : "5vh", scale: 1.6})
			.addTo(controller);

		}	
	</script>
