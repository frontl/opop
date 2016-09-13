$(function(){
    $('#fullpage').fullpage({
    	'scrollingSpeed': 1040,
        'verticalCentered': false,
        'resize':false,
        'css3': true,
        'sectionsColor': ['red', 'pink', 'yellow', '#fff'], //slide 的颜色
          'loopBottom':'true',//自动滚动 横向轮播
        anchors: ['page1', 'page2', 'page3', 'page4'],
        'navigation': false,
        'navigationPosition': 'right',
        'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],
        'scrollOverflow': true,
        'controlArrowColor':'red',
        'slidesNavPosition':'top',
         'slidesNavigation':'true',
         'autoScrolling':'false',
         'keyboardScrollin':'true',
         'menu': '#menu'


    })

       setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 3000);
})
