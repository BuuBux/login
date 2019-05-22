import '../styles/index.scss';

const newText = '{Apteka}';
const forgot = document.querySelector('.remember-link');
const goBack = document.querySelector('.back-link');
const forgotForm = document.querySelector('.forgot');
const loginForm = document.querySelector('.log-in');

let i = 1;

const floatingLetters = () => {
    if(i < newText.length){
        document.querySelector('.animated-header').innerHTML+=newText.charAt(i-1);
        i++;
        setTimeout(floatingLetters, 110);
    }else if(i === newText.length){
        document.querySelector('.animated-header').innerHTML+=`<span class="shine">${newText.charAt(i-1)}</span>`;
    }
};

window.addEventListener('load', () => {
    setTimeout(() => {
        if(forgotForm.classList.contains('hidden'))
            forgotForm.classList.remove('hidden');
    }, 300);
});

window.addEventListener('load', floatingLetters);


forgot.addEventListener('click', () => {
    if(forgotForm.classList.contains('closed')){
        forgotForm.classList.remove('closed');
        loginForm.classList.remove('open');
        loginForm.classList.add('closed');
        forgotForm.classList.add('open');  
    }
});

goBack.addEventListener('click', () => {
    if(loginForm.classList.contains('closed')){
        loginForm.classList.remove('closed');
        forgotForm.classList.remove('open');
        forgotForm.classList.add('closed');
        loginForm.classList.add('open');
    }
});