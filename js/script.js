$(function(){
let wrapperWidth = 0;
let pgConst =0;
const totalPage =3;



//페이지 버튼 생성

for(let i=0; i <totalPage; i++){
    if(i==0){
        $('#page').append(`<li date-index="${i}" class="active"></li>`);
    }else{
        $('#page').append(`<li date-index="${i}"></li>`);
    }
}




   $('.nav-item').hover(function(){
     $(this).find('ul.lnb').fadeToggle();
   });

   $('.category').hover(function(){
      const w = $('.container').width();  //container의 가로크기를 읽어 옴
      $('.categorybox').css('width', w+"px"); //categorybox의 가로 크기로 설정함.
      $(this).find('.categorybox').fadeToggle();
   });

$(document).on('mouseenter', '.best-cart', function(){
    $(this).find('i').removeClass('ri-shopping-bag-4-line').addClass('ri-shopping-bag-4-fill');
}).on('mouseleave', '.best-cart', function(){
    $(this).find('i').removeClass('ri-shopping-bag-4-fill').addClass('ri-shopping-bag-4-line');
});

$(document).on('mouseenter', '.best-heart', function(){
    $(this).find('i').removeClass('ri-heart-line').addClass('ri-heart-fill');
}).on('mouseleave', '.best-heart', function(){
    $(this).find('i').removeClass('ri-heart-fill').addClass('ri-heart-line');
});

   $(window).on('scroll', function(){
      const navigation = $('.navigation').offset().top;
      if($(this).scrollTop() > 220){
         $('.navigation').css({
            position : 'fixed',
            top: '45px',
            width: '100%'
         });
      }else{
         $('.navigation').css({
            position: 'static'
         })
      }
   });


$(window).on('load', function(){

    const pageHeight = $('.slide-page:first-child').outerHeight(true);
    $('.slide-wrapper').css('height', pageHeight+"px");
    wrapperWidth = $('.slide-wrapper').width();
});

setInterval(bestSilde, 8000);


function updatePage(){
    $('#page li').removeClass('active')
        .eq(pgCount).addClass('active')
    
}






function bestSilde(){
    pgConst++;
    if(pgConst == totalPage){
        pgConst =0;
    }




    $('.slide-wrapper-in').animate({
        left : -wrapperWidth + "px"
    }, 300, function(){

        const first = $('.slide-wrapper-in .slide-page').first();
        first.clone().appendTo('.slide-wrapper-in');
        first.remove();   
        $('.slide-wrapper-in').css('left', 0);
    });
}






});

let slideIndex = 1;
showSlides(slideIndex);

setInterval( function(){
    pushSlides(1)
}, 5000);

const input = document.getElementById("searchInput");
const form = document.getElementById("search");

input.addEventListener("focus", function(){
   form.classList.add('focus');
});

input.addEventListener("blur", function(){
    form.classList.remove("focus");
});

function pushSlides(n){
    showSlides(slideIndex += n);
}
function currentSlides(n){
    showSlides(slideIndex -= n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if(n > slides.length) {
        slideIndex = 1;
    }
    for(i =0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}