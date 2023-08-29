  const scriptURL = 'https://script.google.com/macros/s/AKfycbwwvWUaMkTky89WsSlSxWTaadQgzAdqMkz5xZNDCjm9XhIwzRZQgP_Yl_40_wFGQ-Qx/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
