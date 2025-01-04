const burger = () => {
  const header = document.querySelector('.header');
  const burgerBtn = document.querySelector('.header__burger-btn');

  const removeBurger = ()=> {
    header.classList.remove('header_active');
  }

  const addBurger = ()=> {
    header.classList.add('header_active');
  }

  burgerBtn.addEventListener('click', ()=> {
    header.classList.toggle('header_active');
  })
}

export {burger}