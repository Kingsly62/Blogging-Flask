const parentContainer = document.querySelector('.card1');
parentContainer.addEventListener('click',event=>{
    const current = event.target;
    const isReadMoreBtn = current.className.includes('readmore-btn');
    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.readmore')

    currentText.classList.toggle('.readmore --show');
})
