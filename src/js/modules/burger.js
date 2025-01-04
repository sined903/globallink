const burger = () => {
  const bodyElem = document.body;
  const header = document.querySelector('.header');
  const burgerBtn = document.querySelector('.header__burger-btn');
  const callUsBtn = document.querySelector('.header__call-btn');

  const removeBurger = ()=> {
    header.classList.remove('header_active');
    bodyElem.classList.remove('no-scroll');
  }

  burgerBtn.addEventListener('click', ()=> {
    header.classList.toggle('header_active');
    bodyElem.classList.toggle('no-scroll');
  })

  callUsBtn.addEventListener('click', removeBurger);

  header.addEventListener('click', (event) => {
    const target = event.target;

    if(target.className === 'header__link header__link_active' || target.className === 'header__link' ) {
      removeBurger();
    }
  })
}

export {burger}