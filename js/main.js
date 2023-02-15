//next
const nextBtn = document.getElementById("btn-next");
nextBtn.addEventListener('click', ()=>{
    const activeSlide = document.querySelector('.slide-item, .active');
    activeSlide.classList.remove('active');
    previousBtn.classList.remove('d-none')
    activeSlide.nextElementSibling.classList.add('active');
    if (activeSlide.nextElementSibling.nextElementSibling === null) {
        nextBtn.classList.add('d-none')
    } 
});
//prev
const previousBtn = document.getElementById("btn-prev");
previousBtn.addEventListener('click', ()=>{
    const activeSlide = document.querySelector('.slide-item, .active');
    activeSlide.classList.remove('active');
    nextBtn.classList.remove('d-none')
    activeSlide.previousElementSibling.classList.add('active');
    if (activeSlide.previousElementSibling.previousElementSibling === null) {
        previousBtn.classList.add('d-none')
    }
});
