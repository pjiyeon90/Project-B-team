

//트리거 클릭시 헤더메뉴 토글 기능
let nav = ()=>{
    const btnClose= document.querySelector('.trigger');
    const spanClose= document.querySelector('.longline');
    const elHeader= document.querySelector('header');
    const elArticle = document.querySelectorAll('article');
    const btnNav= document.querySelectorAll('header nav > ul > li');
    
    let toggleFun = function(){
        elHeader.classList.toggle('active'); 
    }
    btnClose.onclick = toggleFun;
    spanClose.onclick = toggleFun;

    btnNav.forEach((navLi,i)=>{
        navLi.onclick = function(e){
            // e.preventDefault();
            btnNav.forEach((delLi)=>{delLi.classList.remove('active')});
            this.classList.add('active'); 
        }
    })



  //마우스 호버시 true값을 반환하고 마우스 리브시 false값을 반환한다.
  let isHeaderVisible = true;
  let hoverEnter = function(e) {
        if(e.type === 'mouseenter'){isHeaderVisible = true;}
        else{isHeaderVisible = false;}
   }

   elHeader.addEventListener('mouseenter', hoverEnter);
   elHeader.addEventListener('mouseleave', hoverEnter);


//마우스 휠 기능시 내릴때 숨고 올릴때 생기고 올릴때 배경색
    elArticle.forEach((article,i)=>{
        article.addEventListener('wheel',function(e){
            try{ //예외 이벤트, 에러시 실행을 안하고 catch()로 간다.
                let idx;
                if(e.deltaY > 0){  //스크롤 내릴때
                    idx = this.nextElementSibling.offsetTop;
                   if(!isHeaderVisible) elHeader.classList.add('active2');
                }else{           //스크롤 올릴때 
                    idx = this.previousElementSibling.offsetTop;
                    elHeader.classList.remove('active2');
                    if(idx!==0){
                        elHeader.style.backgroundColor= "rgba(255,255,255,0.3)";
                    }else{
                        elHeader.style.backgroundColor= "";
                         }
                    }                    
                }catch{}
               });
            })
}


//제이쿼리 명령어로 헤더를 불러오기
$('body').prepend('<header></header>');
$('header').load('./header.html .header-wrap, .line',nav);


