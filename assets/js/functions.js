$(window).scroll(function(){
   youtubeVidScroll();
    
});

function youtubeVidScroll(){
    wScroll= $(window).scrollTop();
    
    $('.video-strip').css('background-position','center -'+ wScroll + 'px')
    
}
