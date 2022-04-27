const init = () => {

    const validateEmail = (event) => {
        const input = event.currentTarget;
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const emailTest = regex.test(input.value);

        if(!emailTest) {
            submitButton.setAttribute('disabled', 'disabled')
            
        } else {
            submitButton.removeAttribute('disabled');
            
        }
    }

    const validatePassowrd = (event) => {
        const input = event.currentTarget;

        if(input.value.length < 7 ) {
            submitButton.setAttribute('disabled', 'disabled');
            input.nextElementSibling.classList.add('error');
        } else {
            submitButton.removeAttribute('disabled');
            input.nextElementSibling.classList.remove('error');
        }
    }
  const inputEmail = document.querySelector('input[type="email"]');
  const inputSenha = document.querySelector('input[type="senha"]');
  const submitButton = document.querySelector('.inputSubmit');

  inputEmail.addEventListener('input', validateEmail);
  inputSenha.addEventListener('input', validatePassowrd);


 if(submitButton) {
     submitButton.addEventListener('click', (e) => {
     e.preventDefault;


     
    

     })
 }

}

window.onload = init;

