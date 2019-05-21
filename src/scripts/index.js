import '../styles/index.scss';

console.log('webpack starterkit');

const newText = 'Welcome!';
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

window.addEventListener('load', floatingLetters);
