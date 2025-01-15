const writeText = () => {
  console.log(typeof window.location.href)
  let copyBtn = document.querySelector('.contacts__copy');
  copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(copyBtn.parentElement.innerText)
    .then(() => {
      console.log('Скопировано')
    })
    .catch(error => {
      console.error(`Текст не скопирован ${error}`)
    })
  })

}

export { writeText }