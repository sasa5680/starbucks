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


/* this year라는 요소를 찾아내 현재 년도를 입력한다 */
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();