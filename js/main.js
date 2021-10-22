//css 요소를 찾는다.
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

//search의 click 이벤트의 핸들러
searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    
    //
    searchEl.classList.add('focused');
    //html속성을 지정해준다.
    searchInputEl.setAttribute('placeholder', '통합검색');
});

//포커스가 해제되면 call 된다
searchInputEl.addEventListener('blur', function(){
    
    //
    searchEl.classList.remove('focused');
    //
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
/*window는 브라우저 창을 의미 */
/* 스크롤 함수를 0.3초마다만 call 함 */
window.addEventListener('scroll', _.throttle(function(){

    if(window.scrollY > 500){
        /* 뱃지 요소를 숨긴다 */
        // badgeEl.style.display = 'none'
        /* 인자 : 요소, 지속시간, 옵션 */
        gsap.to(badgeEl, 0.6, {
            opacity: 0,
            /* 화면에서 없애서 클릭도 막아버린다 */
            display: 'none'
        });

        gsap.to(toTopEl, 0.2, {
            
            x: 0
        })

        /* to top 버튼 보이기 */
    } else{

        gsap.to(badgeEl, 0.6, {
            opacity: 1,
            display: 'block'
        });

        /* to top 버튼 숨기기 */
        
        gsap.to(toTopEl, 0.2, {
            /*  */
            x: 100
        })
    }

    //console.log('scroll');
} , 300));

toTopEl.addEventListener('click', function (){
    gsap.to(window, 0.7, {
        /* gsap의 scroll관련 플러그인 요소 */
        scrollTo: 0
    });
});

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, 1, {
        /* 딜레이로 애니메이션 처리 순서를 결정한다 */
        delay: (index+1)*.7, 
        opacity : 1
    });
});

/* 슬라이더 관련 자바스크립트 */
/* new Swiper(선택자, 옵션) */
const swiper = new Swiper('.notice-line .swiper', {
    direction : 'vertical',     
    autoplay : true,
    loop : true, 

});

const swiper_prom = new Swiper('.promotion .swiper', {
    direction : 'horizontal',     
    slidesPerView: 3,
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 가운데서 부터 시작
/*     autoplay : {

        delay : 5000, //딜레이간 간격
    }, */
    loop : true, 

    pagination: {
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true, //페이지 요소 제어
    },

    navigation : {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

const swiper2 = new Swiper('.awards .swiper', {
    direction : 'horizontal',
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }

});

const promotionEl = document.querySelector('.promotion'); 
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; 
promotionToggleBtn.addEventListener('click', function(){

    /* 상태를 토글한다. */
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion){
        //숨김 처리
        //<div class = "promotion hide"> 가 된다.
        promotionEl.classList.add('hide');
    } else{
        //보임 처리
        promotionEl.classList.remove('hide');
    }
});

function random(min, max) {

    return parseFloat((Math.random()*(max-min)+min).toFixed(2))
}

function floatingObject(selector, delay, size) {

    gsap.to(selector, random(1.5, 2.5), {
        /* y축을 의미 */
        y: size,
        /* 무한반복 */
        repeat: -1,
        yoyo: true,
        /* 애니메이션에 등속 운동이 아닌 부드러운 모션을 준다  */
        ease: Power1.easeInOut,
        delay: random(0, delay)

    });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
    new ScrollMagic
    .Scene({
        triggerElement: spyEl,//보여짐 여부를 감시할 요소를 지정
        triggerHook: 0.8 //뷰포트 기준 0.8 높이(밑에서 위로 20) 이상 올라오면 토글 트리거
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
    
});

/* this year라는 요소를 찾아내 현재 년도를 입력한다 */
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();