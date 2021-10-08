const btn = document.getElementById('generate');
const p = document.getElementById('random-num');

const randomNum = Math.round(Math.random() * 100);
console.log(randomNum);

btn.addEventListener('click', ()=>{
    p.textContent = `${randomNum}`;
});