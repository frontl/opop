 #网址  http://www.uedsc.com/fullpage.html
 #      http://www.360doc.com/content/14/1203/08/19812575_430009823.shtml
 #      http://nate-river.github.io/blog/2016/05/25/jquery-fullpage-work-flow.html
 #      http://www.sucaihuo.com/js/171.html
 # 演示 http://www.sucaihuo.com/jquery/1/171/demo/


<!-- 
 $(function(){
    $('#sucaihuo').fullpage({
        sectionsColor : ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90']
    });

    $(window).resize(function(){
        autoScrolling();
    });

    function autoScrolling(){
        var $ww = $(window).width();
        if($ww < 1024){
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
        }
    }

    autoScrolling();
}); -->

自动滚动
<!-- 
$(function(){
    $('#sucaihuo').fullpage({
        sectionsColor : ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
        loopBottom: true
    });

    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 3000);
}); -->



<!-- <ul id="menu">
	<li data-menuanchor="page1" class="active"><a href="#page1">第一屏</a></li>
	<li data-menuanchor="page2"><a href="#page2">第二屏</a></li>
	<li data-menuanchor="page3"><a href="#page3">第三屏</a></li>
	<li data-menuanchor="page4"><a href="#page4">第四屏</a></li>
</ul>



$(function(){
	$('#sucaihuo').fullpage({
		sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
		anchors: ['page1', 'page2', 'page3', 'page4'],
		menu: '#menu'
	});
});
</script> -->
回调函数
<!-- $(function(){
	$('#sucaihuo').fullpage({
		sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
		afterLoad: function(anchorLink, index){
			if(index == 2){
				$('.section2').find('p').delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 3){
				$('.section3').find('p').delay(500).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 4){
				$('.section4').find('p').fadeIn(2000);
			}
		},
		onLeave: function(index, direction){
			if(index == '2'){
				$('.section2').find('p').delay(500).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '3'){
				$('.section3').find('p').delay(500).animate({
					bottom: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '4'){
				$('.section4').find('p').fadeOut(2000);
			}
		}
	});
}); -->