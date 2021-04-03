//jQuery Smooth Scroll//

$('.rightNav a').on ('click', function(e){
    console.log 
    if(this.hash !==''){
        e.preventDefault();

        const hash= this.hash;

        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
});

$('#backToTop a').on ('click', function(e){
    console.log 
    if(this.hash !==''){
        e.preventDefault();

        const hash= this.hash;

        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
});


$('.bottomPgLink a').on ('click', function(e){
    console.log 
    if(this.hash !==''){
        e.preventDefault();

        const hash= this.hash;

        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
});
