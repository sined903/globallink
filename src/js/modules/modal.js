const modal = ()=> {
  const modal = document.querySelector('.modal');
  const bodyElem = document.body;
  const modalCloseBtn = document.querySelector('.modal__close-btn');
  const callUsBtn = document.querySelector('.header__call-btn');
  const modalBackground = document.querySelector('.modal__background');

  
  const openModal = ()=> {
    modal.classList.add('modal__active');
    bodyElem.classList.add('no-scroll');
  }
    
  const closeModal = ()=> {
    modal.classList.remove('modal__active');
    bodyElem.classList.remove('no-scroll');
  }

  callUsBtn.addEventListener('click', openModal);
  modalBackground.addEventListener('click', closeModal);
  modalCloseBtn.addEventListener('click', closeModal);


}

export {modal}