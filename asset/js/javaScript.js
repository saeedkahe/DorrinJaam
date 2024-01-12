const menu = document.querySelector('.menu')
const heightHeader = document.querySelector('.banner')
const About = document.querySelector('.about')
const items = document.querySelectorAll('.whyChooseUS>article ul li')
const increment = document.querySelector('.increament>div ')
const dataNumberOfIncearment = document.querySelectorAll('.increament>div div span')
console.log(dataNumberOfIncearment)




function IsElementInViewPort(el){
    let rect = el.getBoundingClientRect();
    return(
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth) 
    );
}
function callBackFunction(){
    for(let i =0; i<items.length;i++){
        if(IsElementInViewPort(items[i])){
            items[i].classList.add('visible');
        }
    }
}

window.addEventListener('scroll', callBackFunction);
window.addEventListener('load', callBackFunction);

function _bannerElementMove(){
    document.querySelector('.banner>div>div>h1').classList.add('visible')
    document.querySelector('.banner>div>div>h2').classList.add('visible')
}
setTimeout(_bannerElementMove , 1000)
window.addEventListener('scroll' , function(){
    const winScroll = window.scrollY;
    if(winScroll>60){
        this.document.querySelector('.header>section').classList.add('menuBar')
        this.document.querySelector('.header').style.height='55px'

    }else{
        this.document.querySelector('.header>section').classList.remove('menuBar')
        this.document.querySelector('.header').style.height='75px'
    }
    if(winScroll>(heightHeader.offsetTop + 100)){
       About.querySelector('article>h3').classList.add('visible')
       About.querySelector('article>p').classList.add('visible')
    }if(winScroll>(increment.offsetTop - (increment.clientHeight +500))){
      
        increment.classList.add('increment')
        dataNumberOfIncearment.forEach((item)=>{
            const autoIncreamnet = ()=>{
                const dataNumberOfSpan = +item.getAttribute('data-num')
                const counter = +item.innerText
                const number = dataNumberOfSpan/500;
               if(counter<dataNumberOfSpan){
                item.innerText = Math.ceil(counter + number) 
                setTimeout(autoIncreamnet , 60)
               }
            }
            autoIncreamnet()
        })
    }
    console.log(increment.clientHeight)
    
    
   
})
let num = 1
document.querySelector('.header>section>div:nth-of-type(2)>span').addEventListener('click' , ()=>{

    if(num%2){
        menu.style.height = menu.scrollHeight + 'px'
        menu.style.transition = '1s'
        menu.style.marginTop= '10px'
        document.querySelector('.header>section').classList.add('menuBar')
        document.querySelector('.header').style.height='50px'
        
        num++
    }else{
       setTimeout(_menuScroll , 1000)
       menu.style.marginTop= '0'
        menu.style.height = ""
        num++
    }
    console.log(num%2)

})
function _menuScroll(){
    menu.style.transition = ''
}


