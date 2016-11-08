$(function(){
   
    mentoringBubbleClick();
    backButtonClick();
    setInterval(function(){articleTada();}, 2900)
    designBGStuff();
    mobileNav();
    smoothScroll();
    
});



function smoothScroll(){
    
    $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
    
}

function mobileNav(){
     
    $('.mobile-nav-toggle').on('click',function(){
        
        var status= $(this).hasClass('is-open');
        if(status)
            $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open');
        else
            $('.mobile-nav-toggle, .mobile-nav').addClass('is-open');
        
    });
    
}

// function that toggle tada animation randomly on articles
function articleTada(){
    var artNum = Math.floor(Math.random() * $('.article-thumb').length) + 1;
    
    $('.article-thumb').eq(artNum).addClass('is-emph')         //eq takes only one article-thumb
        .siblings().removeClass('is-emph');
}


function designBGStuff(){
    
    $('.design-img-link').hover(function(){
        // find a color> applay
        $(this).parent().parent().css('background-color', $(this).data('color'));
        $(this).siblings( "a" ).css('color', $(this).data('color'));
    },function(){
        $(this).parent().parent().css('background-color', $(this).parent().parent().data('orig-color'));
        $(this).siblings("a").css('color', $(this).parent().parent().data('orig-color'));
     });
    
}



function mentoringBubbleClick(){
    $('.face').on('click',function(){
        
        var distance= $(this).position().top,  // .offsettop od pocetka prozora
        VDistance= -1* (distance - 230),
        distanceLeft= $(this).position().left,
        VDListance= 0 - distanceLeft;
        
        
        
        if($(window).width()> 640){
                $(this).parent().css('top', + VDistance + 'px');

                $(this).addClass('has-bubble-open')
                .siblings().removeClass('has-bubble-open');
            
        }else{
                $(this).parent().css('left', + VDListance + 'px');
             }
        
        $(this).addClass('has-bubble-open')
                .siblings().removeClass('has-bubble-open');
        
        
        
        
    });
   
    // when i click a face
    // get distance of the face from its parent
    // slide container up
    // shift by 115px face=80px margin=35px add the class to face
};



  function backButtonClick(){
        $('.back-btn').on('click',function(){
        
            mentoringNarrowStart();
        
        });
        
    };
    





$(window).scroll(function(){
   youtubeVidScroll();
   bubblesLaunched();
   startArticles(); 
});




function youtubeVidScroll(){
    wScroll= $(window).scrollTop();
    
    $('.video-strip').css('background-position','center -'+ wScroll + 'px')
}





function startArticles(){
    wScroll= $(window).scrollTop();
    if($('section.articles').offset().top - $(window).height()/2< wScroll){
        $('.article-thumb').each(function(i){
            setTimeout(function(){
                
                $('.article-thumb').eq(i).addClass('is-visible');
                
            },150 * i);
        });
    }
    
}



function bubblesLaunched(){
    wScroll= $(window).scrollTop();
    if($('section.mentoring').offset().top - $(window).height()/2< wScroll && $(window).width()> 640 ){
        $('.faces').addClass('launch');
        
            if(!($('.face').hasClass('has-bubble-open'))){
            setTimeout(function(){
                $('.face:nth-child(3)').addClass('has-bubble-open');
            },300)
        }
    }
    
    
    if($('section.mentoring').offset().top - $(window).height()/2< wScroll && $(window).width()<640 ){
        $('.faces').addClass('launch');
        
            if(!($('.face').hasClass('has-bubble-open'))){
            setTimeout(function(){
                $('.face').first().addClass('has-bubble-open');
            },300)
        }
    }
};

function mentoringNarrowStart(){
    $('.faces').css({
        'top': '230px',
        'left': '0px'
    });
    $('.face').first().addClass('has-bubble-open').siblings().removeClass('has-bubble-open');
    
};

function mentoringWideStart(){
    $('.faces').css({
        'top': '0px',
        'left': '0px'
    });
    $('.face:nth-child(3)').addClass('has-bubble-open').siblings().removeClass('has-bubble-open');
    
};




// fukcija koja okida na svaku promenu velicine prozora
$(window).resize(function(){
    
    if($(window).width()> 640){
        mentoringWideStart();
    }else{
        mentoringNarrowStart();
    }
    
});
