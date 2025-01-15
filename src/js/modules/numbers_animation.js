const numberAnim = () => {
  const numberSection = document.querySelector(".numbers");
  
  if (numberSection !== null) {
    const startAnimation = numberSection.getBoundingClientRect().top;
    const numbers = document.querySelectorAll(".numbers__item");

    window.addEventListener("scroll", function onscroll() {
      if (window.pageYOffset > startAnimation / 2) {
        this.removeEventListener("sctoll", onscroll);
  
        numbers.forEach((element) => {
          let start = +element.innerHTML;
          const end = +element.dataset.max;
          const interval = setInterval(() => {
            if (start < end) {
              element.innerHTML = start += 1;
            } else {
              clearInterval(interval);
            }
          }, 1);
        });
      }
    });
  }
};

export { numberAnim };
