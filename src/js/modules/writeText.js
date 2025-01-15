const writeText = () => {
  let copyBtn = document.querySelector('.contacts__copy');

  if (copyBtn !== null) {
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
}

export { writeText }