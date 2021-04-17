let sliderImages = document.querySelectorAll('.slide');
let arrowRight = document.querySelector('#aright')
let arrowLeft = document.querySelector('#aleft');
let current=0;

function reset(){
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display='none';
    }
}

function startSlide()
{
    reset();
    sliderImages[0].style.display='block';
}
function slideRight()
{
    reset();
    sliderImages[current+1].style.display='block';
    sliderImages[current+1].style.animation='sliderRight .5s ease'
    current++;
}


function slideLeft()
{
    reset();
    sliderImages[current-1].style.display='block';
    sliderImages[current-1].style.animation='sliderLeft .5s ease'
    current--;
}

arrowLeft.addEventListener('click',()=>{
    if(current===0)
    {
        current=sliderImages.length;
    }
    slideLeft();
});
arrowRight.addEventListener('click',()=>{
    if(current===sliderImages.length-1)
    {
        current = -1;
    }
    slideRight();
});

startSlide();